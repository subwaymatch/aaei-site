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
    multipleChoiceIds: [5, 6, 7],
    pythonChallengeIds: [1],
  },
  {
    label: "Data Types and Variables",
    href: "/notes/data-types-and-variables",
    multipleChoiceIds: [8, 9, 11, 13, 14, 15, 16, 17],
    pythonChallengeIds: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    label: "Conditionals",
    href: "/notes/conditionals",
    multipleChoiceIds: [18, 19, 20],
    pythonChallengeIds: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    label: "Collections",
    href: "/notes/collections",
    multipleChoiceIds: [21, 22, 23, 25, 26],
    pythonChallengeIds: [
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    ],
  },
  {
    label: "Loops",
    href: "/notes/loops",
    multipleChoiceIds: [],
    pythonChallengeIds: [39, 40, 41, 42, 43],
  },
  {
    label: "Functions",
    href: "/notes/functions",
    multipleChoiceIds: [28],
    pythonChallengeIds: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
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
}

export default function MainPage({ lectureComponents }: IMainPageProps) {
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

                {lectureComponents.map((o) => (
                  <GradedComponent
                    key={o.href}
                    label={o.label}
                    href={o.href}
                    progress={o.progress}
                  />
                ))}

                <GradedComponent
                  label="Pandas Guided Case Study"
                  href="https://nbviewer.org/github/subwaymatch/AAEI-notebooks/blob/main/AAEI-rideshare-vehicles-SOLUTION.ipynb"
                  progress={0}
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

  return sspObj;
};
