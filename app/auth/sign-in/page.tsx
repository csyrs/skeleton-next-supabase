"use client";
import Form from "next/form";
import { useState } from "react";
import { sendSignInEmail } from "../../../auth/client";

export default function Page() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function submitForm(form: FormData): void {
    sendSignInEmail({
      address: String(form.get("address")),
      recallUrl: new URL(location.origin),
    });
    setFormSubmitted(true);
  }

  return formSubmitted ? (
    <>
      <h1>Check your inbox.</h1>
      <p>You should receive a link soon if your email address was valid.</p>
    </>
  ) : (
    <Form action={submitForm}>
      <h1>Enter your email address to receive a sign-up or sign-in link.</h1>
      <label>
        Email
        <input type="email" name="address" required />
      </label>
      <button type="submit">Send email</button>
    </Form>
  );
}
