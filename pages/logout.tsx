import { supabaseClient } from "lib/supabase/supabaseClient";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
export default function SignOutPage() {
  const router = useRouter();

  const signOut = async () => {
    await supabaseClient.auth.signOut();

    router.push("/login");
  };

  useEffect(() => {
    signOut();
  }, []);

  return <>Signing out...</>;
}
