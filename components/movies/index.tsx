"use client";

import { MoviesType } from "@/pages/models/models";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [state, setState] = useState<MoviesType[]>([]);

  const handelFetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/get-all-movies"
      );
      setState(response.data);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    handelFetch();
  }, []);
  console.log(state);
  return (
    <div>
      {state.map((it, index) => (
        <span key={index}>{it.movieName}</span>
      ))}
    </div>
  );
}
