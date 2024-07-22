import { useEffect, useState } from "react";

export function useSession() {
  const [session, setSession] = useState<string | null>();

  function signIn(session: string) {
    localStorage.setItem("session", JSON.stringify(session));
  }

  function signOut() {
    localStorage.removeItem("session");
    setSession(null);
  }

  useEffect(() => {
    setSession(JSON.parse(localStorage.getItem("session")!) ?? null);
  }, []);

  return {
    session,
    setSession,
    signIn,
    signOut,
  };
}
