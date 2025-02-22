"use client";

export default function RootGlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>An error occurred.</h1>
      <button onClick={reset}>Reload</button>
    </>
  );
}
