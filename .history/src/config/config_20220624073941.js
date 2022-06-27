export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = `172c72b78f475e54c01895081cfafdea`;
const tmdbndpont 
export const tmdbAPI = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=172c72b78f475e54c01895081cfafdea`,
};
