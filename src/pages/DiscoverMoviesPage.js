import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useHistory, useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchStatus, setsearchStatus] = useState("No Searching Yet");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const params = useParams();
  console.log("this is params", params);

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  useEffect(() => {
    if (params.searchtext === undefined || params.searchtext === "") {
      return;
    }
    const fetchMovies = async () => {
      console.log("fetching");
      const queryParam = encodeURIComponent(params.searchtext);
      setsearchStatus("Searching");
      try {
        const data = await axios.get(
          `https://omdbapi.com/?s=${queryParam}&apikey=796f0295`
        );
        if (data.data.Response === "False") {
          setMovies([]);
          setsearchStatus(
            "What are you typing? This movie doesn't even exist!"
          );
        } else {
          setMovies(data.data.Search);
          setsearchStatus("Searching Done");
        }
      } catch (error) {
        console.log("error test");
      }
      //   setsearchStatus("Searching Done");
      // console.log("data", data); // data has all the movies list depending on searchtext
      //   setMovies(data.data.Search);
    };
    fetchMovies();

    console.log("Ok, this is the useEffect");
  }, [params.searchtext]);
  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>
      <div>Status: {searchStatus} </div>
      <div>
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <div>
                <NavLink to={`/movie/${movie.imdbID}`}>
                  Movie Title: {movie.Title} ({movie.Year}){" "}
                </NavLink>
              </div>
              <img src={movie.Poster} alt="movie poster" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
