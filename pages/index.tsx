import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/index.module.scss";
import { GetServerSideProps } from "next";
import { getProtectedPageServerSideProps } from "utils/auth";
import SiteTitle from "components/common/SiteTitle";

export default function MainPage({ user }) {
  return (
    <Layout>
      <main className={styles.mainPage}>
        <Container>
          <Row>
            <Col>
              <SiteTitle />
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
