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
import { userInfo } from "os";

const _lectureComponents = [
  {
    label: "Introduction to Data Analytics",
    href: "/notes/intro-to-analytics",
    multipleChoiceIds: [2],
    pythonChallengeIds: [],
  },
  {
    label: "Introduction to Python",
    href: "/notes/intro-to-python",
    multipleChoiceIds: [2],
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

  const mcqIds = [2];

  const { data, error } = await supabaseClient
    .from("multiple_choice_attempts")
    .select();

  console.log(mcqIds);
  console.log(data);

  sspObj.props["lectureComponents"] = _lectureComponents.map((o) => {
    (o as IModuleComponent).progress = 44;

    return o;
  });

  sspObj.props["quizComponents"] = _quizComponents.map((o) => {
    (o as IModuleComponent).progress = 44;

    return o;
  });

  return sspObj;
};
