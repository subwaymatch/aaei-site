import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/index.module.scss";
import { GetServerSideProps } from "next";
import { getProtectedPageServerSideProps } from "utils/auth";
import SiteTitle from "components/common/SiteTitle";
import GradedComponent from "components/GradedComponents/GradedComponent";
import SectionTitle from "components/common/SectionTitle";
import { User } from "@supabase/supabase-js";
import { supabaseClient } from "lib/supabase/supabaseClient";
import { definitions } from "types/database";

const _lectureComponents = [
  {
    label: "Introduction to Data Analytics",
    href: "/notes/intro-to-analytics",
    multipleChoiceIds: [2, 3, 4],
    pythonChallengeIds: [],
  },
  {
    label: "Introduction to Python",
    href: "/notes/intro-to-python",
    multipleChoiceIds: [],
    pythonChallengeIds: [],
  },
];

const _quizComponents = [
  {
    label: "Quiz 1",
    href: "/",
    multipleChoiceIds: [2],
    pythonChallengeIds: [],
  },
  {
    label: "Quiz 2",
    href: "/",
    multipleChoiceIds: [2],
    pythonChallengeIds: [],
  },
];

interface IModuleComponent {
  label: string;
  href: string;
  multipleChoiceIds: Array<number>;
  pythonChallengeIds: Array<number>;
  progress: number;
}

interface IMainPageProps {
  user: User;
  lectureComponents: Array<IModuleComponent>;
  quizComponents: Array<IModuleComponent>;
}

export default function MainPage({
  lectureComponents,
  quizComponents,
}: IMainPageProps) {
  return (
    <Layout>
      <main className={styles.mainPage}>
        <Container>
          <Row>
            <Col>
              <SiteTitle className={styles.siteTitle} />

              <div className={styles.components}>
                <SectionTitle>
                  <span>Components</span>
                  <span className="accent blue" />
                </SectionTitle>

                {lectureComponents.map((o) => (
                  <GradedComponent
                    key={o.href}
                    label={o.label}
                    href={o.href}
                    progress={o.progress}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const sspObj = await getProtectedPageServerSideProps(req);

  if (sspObj.hasOwnProperty("redirect")) {
    return sspObj;
  }

  // @ts-ignore
  supabaseClient.auth.session = () => ({
    access_token: req.cookies["sb:token"],
  });

  const { data: mcqData, error: mcqErrors } = await supabaseClient
    .from<definitions["multiple_choice_attempts"]>("multiple_choice_attempts")
    .select("question_id")
    .match({
      user_id: sspObj.props.user.id,
      is_success: true,
    });

  const { data: pyData, error: pyErrors } = await supabaseClient
    .from<definitions["coding_challenge_attempts"]>("coding_challenge_attempts")
    .select("challenge_id")
    .match({
      user_id: sspObj.props.user.id,
      is_success: true,
    });

  const mcqSuccessfulIds = Array.from(
    new Set(mcqData.map((o) => o.question_id))
  );

  const pySuccessfulIds = Array.from(
    new Set(pyData.map((o) => o.challenge_id))
  );

  sspObj.props["lectureComponents"] = _lectureComponents.map((o) => {
    let totalCount = 0;
    let successfulCount = 0;

    o.multipleChoiceIds.forEach((id) => {
      totalCount++;

      if (mcqSuccessfulIds.includes(id)) {
        successfulCount++;
      }
    });

    o.pythonChallengeIds.forEach((id) => {
      totalCount++;

      if (pySuccessfulIds.includes(id)) {
        successfulCount++;
      }
    });

    if (totalCount > 0) {
      (o as IModuleComponent).progress = Math.ceil(
        (successfulCount / totalCount) * 100
      );
    } else {
      (o as IModuleComponent).progress = 0;
    }

    return o;
  });

  sspObj.props["quizComponents"] = _quizComponents.map((o) => {
    (o as IModuleComponent).progress = 44;

    return o;
  });

  return sspObj;
};
