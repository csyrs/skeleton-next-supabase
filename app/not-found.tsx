import Link from "next/link";

export default function RootNotFound() {
  return (
    <>
      <h1>Page not found.</h1>
      <Link href="/">Return to home</Link>
    </>
  );
}
