import React, { createContext, useState, useContext } from "react";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider
      value={{ movies, setMovies, selectedMovie, setSelectedMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
