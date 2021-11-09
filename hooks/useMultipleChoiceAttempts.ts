import { useEffect, useState } from "react";
import useSupabaseAuth from "hooks/useSupabaseAuth";
import { supabaseClient } from "lib/supabase/supabaseClient";
import { definitions } from "types/database";
import orderBy from "lodash/orderBy";

export default function useMultipleChoiceAttempts(challengeId: number) {
  const { user } = useSupabaseAuth();

  const [attempts, setAttempts] = useState<
    definitions["multiple_choice_attempts"][]
  >([]);

  const updateAttempts = async () => {
    if (!user || !challengeId) {
      return;
    }

    const { data, error } = await supabaseClient
      .from<definitions["multiple_choice_attempts"]>("multiple_choice_attempts")
      .select()
      .match({
        user_id: user.id,
        question_id: challengeId,
      })
      .order("submitted_at", { ascending: false })
      .limit(100);

    if (error) {
      console.error(error);
    } else {
      setAttempts(data);
    }
  };

  useEffect(() => {
    if (!user || !challengeId) {
      setAttempts([]);
      return;
    }

    updateAttempts();

    const newAttemptSubscription = supabaseClient
      .from<definitions["multiple_choice_attempts"]>(
        `coding_challenge_attempts:user_id=eq.${user.id}`
      )
      .on("INSERT", async (payload) => {
        const newData = payload.new;

        if (newData.question_id === challengeId) {
          setAttempts((previousAttempts) => {
            const updatedAttempts = orderBy(
              [newData, ...previousAttempts],
              ["submitted_at"],
              ["desc"]
            );

            return updatedAttempts;
          });
        }
      })
      .subscribe();

    return () => {
      supabaseClient.removeSubscription(newAttemptSubscription);
    };
  }, [user, challengeId]);

  return { attempts };
}
