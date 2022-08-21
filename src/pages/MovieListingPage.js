import React from "react";
import MovieList from "../components/Card/MovieList";
const MovieListingPage = () => {
  return (
    <React.Fragment>
      <main className="bg-red-800">
        <MovieList />
      </main>
    </React.Fragment>
  );
};

export default MovieListingPage;
