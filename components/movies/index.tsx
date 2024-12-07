/* eslint-disable @typescript-eslint/no-unused-vars */
import { MoviesType } from "@/pages/models/models";
import Cart from "./cart";
const getMovies = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-all-movies", {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
export default async function Movies() {
  const state: MoviesType[] = await getMovies();
  return (
    <div className="p-2 grid grid-cols-4 gap-2">
      {state.map((it, index) => (
        <Cart
          key={index}
          width={400}
          height={400}
          imageSrc={`http://localhost:3000/api/get-images/${it.movieImage}`}
        />
      ))}
    </div>
  );
}
