import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { imdb_id } = useParams();
  const [movieData, set_movieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieDetails = await Axios.get(
        `https://omdbapi.com/?i=${imdb_id}&apikey=796f0295`
      );
      console.log("data", movieDetails);
      set_movieData(movieDetails.data);
    }
    fetchData();
  }, [imdb_id]);
  console.log("this is the final date to use", movieData);
  return (
    <div>
      <h1>
        {movieData.Title} ({movieData.Year})
      </h1>
      <img src={movieData.Poster} alt="movie poster" />
    </div>
  );
}
