import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <img
        src="https://favorflav.com/images/PopcornGettyImages-1178064673.jpg"
        alt="head-pic"
        className="head-img"
      />
      <NavBar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
