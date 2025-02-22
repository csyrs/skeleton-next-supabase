"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sendSignOutRequestForCurrentUser } from "../../../auth/client";

export default function Page() {
  const [signOutCompleted, setSignOutCompleted] = useState(false);

  useEffect(() => {
    sendSignOutRequestForCurrentUser().then(({ error }) => {
      if (error) throw error;
      setSignOutCompleted(true);
    });
  });

  return signOutCompleted ? (
    <>
      <h1>You have been signed out.</h1>
      <Link href="/">Return to home</Link>
    </>
  ) : (
    <>
      <h1>Signing you out...</h1>
    </>
  );
}
