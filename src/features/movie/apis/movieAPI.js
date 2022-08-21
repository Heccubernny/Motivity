import axios from "axios";
// const movieAPI = axios.create({
//   baseURL: "https://www.omdbapi.com/",
// });
// export default movieAPI;

export default axios.create({
  // baseURL: "https://api.themoviedb.org/",
  baseURL: "https://www.omdbapi.com/"
});
