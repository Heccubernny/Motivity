import { Route, Routes } from "react-router-dom";
import { FourOFour, Navbar } from "./components";
import { HomePage, MovieDetailPage, MovieListPage } from "./pages";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:imdbID/detail" element={<MovieDetailPage />} />
        {/* Movies/id/detail */}

        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/404" element={<FourOFour />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
