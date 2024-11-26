/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Blog({ searchParams }: any) {
  const { log } = searchParams;
  return <h1>Blog : {log}</h1>;
}
