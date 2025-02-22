import db from "../db/client";
import { createContext } from "react";
import { AuthError, Session } from "@supabase/supabase-js";

export function sendSignInEmail({
  address,
  recallUrl,
}: {
  address: string;
  recallUrl: URL;
}): Promise<{
  data: { session: string; user: string } | null;
  error: AuthError | null;
}> {
  return db.auth.signInWithOtp({
    email: address,
    options: {
      emailRedirectTo: String(recallUrl),
    },
  });
}

export enum SignOutScope {
  AllSessions = "global",
  ThisSession = "local",
  OtherSessions = "others",
}

export function sendSignOutRequestForCurrentUser(
  scope: SignOutScope = SignOutScope.AllSessions,
): Promise<{ error: AuthError | null }> {
  return db.auth.signOut({ scope });
}

export function checkSessionForCurrentUser(): Promise<{
  data: { session: Session | null };
  error: AuthError | null;
}> {
  return db.auth.getSession();
}

export const AuthContext: React.Context<Session | null> = createContext(null);
