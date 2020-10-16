import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";

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
      <img src={movieData.Poster} alt="movie poster" className="details-img" />
      <h4>What? What is this movie about?</h4>
      <p>{movieData.Plot}</p>
      <h4>Do you have enough time for it?</h4>
      <p>It will take approximately {movieData.Runtime}.</p>
      <h4>What kind of movie is this? Scary? Happy? Adventurous?</h4>
      <p>
        This movie is a {movieData.Genre}. I hope you are in the mood for it.
      </p>
      <h4>Is it a movie worth seeing?</h4>
      <p>This is the opinion (rating) of IMDb : {movieData.imdbRating}</p>
      <p>The awards it won are: {movieData.Awards}</p>
      <h4>Who is playing in it?</h4>
      <p>{movieData.Actors}</p>
    </div>
  );
}
