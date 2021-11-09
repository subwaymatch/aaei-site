import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/index.module.scss";
import { GetServerSideProps } from "next";
import { getProtectedPageServerSideProps } from "utils/auth";
import SiteTitle from "components/common/SiteTitle";
import GradedComponent from "components/GradedComponents/GradedComponent";
import SectionTitle from "components/common/SectionTitle";

export default function MainPage({ user }) {
  return (
    <Layout>
      <main className={styles.mainPage}>
        <Container>
          <Row>
            <Col>
              <SiteTitle className={styles.siteTitle} />

              <div className={styles.components}>
                <SectionTitle bottomBorder>
                  <span>Components</span>
                  <span className="accent blue" />
                </SectionTitle>

                <GradedComponent
                  label="Introduction to Analytics"
                  href="/notes/intro-to-analytics"
                  progress={100}
                />
                <GradedComponent
                  label="Variables and Data Types"
                  href="/"
                  progress={18}
                />
                <GradedComponent
                  label="Introduction to Analytics"
                  href="/"
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
  return getProtectedPageServerSideProps(req);
};
