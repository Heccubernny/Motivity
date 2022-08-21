import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movie/movieSlice";
import Card from "./Card";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <Card key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <Card key={index} data={movie} />)
    ) : (
      <div className="">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <React.Fragment>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-600 tracking-tight dark:text-slate-200 my-10 text-center">
        Movies
      </h2>

      <div className="mx-20">
        <div className="grid grid-rows-6 gap-4 md:grid-cols-6 justify-between">
          {renderMovies}
        </div>
      </div>

      {/* Render the movie with the Type show */}

      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-600 tracking-tight dark:text-slate-200 my-10 text-center">
        Series
      </h2>

      <div className="mx-20">
        <div className="grid grid-rows-6 gap-4 md:grid-cols-6 justify-between">
          {renderShows}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieList;
