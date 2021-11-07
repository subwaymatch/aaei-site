import { supabaseClient } from "lib/supabase/supabaseClient";

export async function getProtectedPageServerSideProps(req) {
  const { user } = await supabaseClient.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      props: {},
      redirect: { destination: "/login", permanent: false },
    };
  }

  return { props: { user } };
}
