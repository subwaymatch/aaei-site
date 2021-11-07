import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/index.module.scss";
import { GetServerSideProps } from "next";
import { getProtectedPageServerSideProps } from "utils/auth";

export default function MainPage({ user }) {
  return (
    <Layout>
      <main className={styles.mainPage}>
        <Container>
          <div className={styles.courseTitleWrapper}>
            <Row>
              <Col>
                <h1>Academy for Accountancy Excellence and Innovation</h1>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return getProtectedPageServerSideProps(req);
};
