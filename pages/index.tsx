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
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import lectureComponents from "data/lectureComponents";

interface IModuleComponent {
  title: string;
  slug: string;
  multipleChoiceIds: Array<number>;
  pythonChallengeIds: Array<number>;
  progress: number;
}

interface IMainPageProps {
  user: User;
  modules: Array<IModuleComponent>;
}

export default function MainPage({ modules }: IMainPageProps) {
  const { user } = useSupabaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

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

                {modules.map((o) => (
                  <GradedComponent
                    key={o.slug}
                    label={o.title}
                    href={`/notes/${o.slug}`}
                    progress={o.progress}
                  />
                ))}

                <GradedComponent
                  label="Introduction to Jupyter Notebooks and Pandas"
                  href="https://canvas.illinois.edu/courses/827/assignments/375020"
                  showProgress={false}
                  progressMessage="External Link ⟶"
                />

                <GradedComponent
                  label="Starbucks App Data"
                  href="https://canvas.illinois.edu/courses/827/assignments/423696"
                  showProgress={false}
                  progressMessage="External Link ⟶"
                />
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

  sspObj.props["modules"] = lectureComponents.map((o) => {
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

  return sspObj;
};
