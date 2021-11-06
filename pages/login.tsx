import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "components/Layout";
import Login from "components/Auth/Login";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { Container, Row, Col } from "react-bootstrap";
import SiteTitle from "components/common/SiteTitle";

export default function LoginPage() {
  const { user } = useSupabaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <Layout excludeHeader={true}>
      <main style={{ paddingTop: "2rem" }}>
        <Container>
          <Row>
            <Col>
              <SiteTitle />
            </Col>
          </Row>
        </Container>

        <Login />
      </main>
    </Layout>
  );
}
