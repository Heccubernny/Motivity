import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MovieList } from "../components";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movie/movieSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <React.Fragment>
      <main>
        <MovieList />
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 inline-flex items-center"
          type="button"
        >
          <Link to="/movies" className="">
            Show more
          </Link>
        </button>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
