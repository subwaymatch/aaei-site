import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Layout from "components/Layout";
import { Auth } from "@supabase/ui";
import { supabaseClient } from "lib/supabase/supabaseClient";
import { Container, Row, Col } from "react-bootstrap";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { user } = useSupabaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <Layout excludeHeader>
      <section style={{ marginBottom: "8rem" }}>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 2 }}>
              <h1
                style={{
                  fontSize: "1.2em",
                  lineHeight: 1.4,
                  fontWeight: 600,
                  marginTop: "2rem",
                }}
              >
                Academy for Accountancy Excellence and Innovation Data Analytics
                Module
              </h1>
              <Auth supabaseClient={supabaseClient} providers={[]} />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabaseClient.auth.api.getUserByCookie(req);

  if (user) {
    return {
      props: {},
      redirect: { destination: "/", permanent: false },
    };
  }

  return { props: {} };
};
