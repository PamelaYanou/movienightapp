import axios from "axios"
const apiKey = "1e5fb7bc";

export const fetchMoviesByTitle = async (title) => {
  const url = `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw new Error("Failed to fetch movie data");
  }
};

export const fetchMovieDetails = async (imdbID) => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    try {
      const response = await axios.get(url);
      if (response.data.Response === "True") {
        return response.data; // Returns the detailed movie object
      } else {
        throw new Error(response.data.Error);
      }
    } catch (error) {
      throw new Error("Failed to fetch movie details");
    }
  };