"use client";
import "./_css/index.css";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext, checkSessionForCurrentUser } from "../auth/client";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    checkSessionForCurrentUser().then(({ data: { session }, error }) => {
      if (error) return;
      setSession(session);
    });
  });

  return (
    <AuthContext.Provider value={session}>
      <html>
        <body>
          <header>
            <Link href="/auth/sign-in">Sign up / Sign in</Link>
          </header>
          {children}
          <footer>
            <Link href="/auth/sign-out">Sign out</Link>
          </footer>
        </body>
      </html>
    </AuthContext.Provider>
  );
}
