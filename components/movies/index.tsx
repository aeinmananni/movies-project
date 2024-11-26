import { MoviesType } from "@/pages/models/models";
import moveImage from "@/public/images/poster1-johnWick.jpg";
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
      <Cart imageSrc={moveImage} />

      {/* {state.map((it, index) => (
        <span key={index}>{it.movieName}</span>
      ))} */}
    </div>
  );
}
