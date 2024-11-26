/* eslint-disable @typescript-eslint/no-explicit-any */

export default function SingleMovies({ params }: any) {
  const { movieId } = params;
  return <h1>Movies ID : {movieId}</h1>;
}
