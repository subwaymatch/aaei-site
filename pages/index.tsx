import Layout from "components/Layout";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/pages/index.module.scss";

export default function MainPage() {
  const { user } = useSupabaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

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
