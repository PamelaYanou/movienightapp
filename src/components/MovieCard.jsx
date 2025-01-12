import React from "react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(movie.imdbID)}
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800">{movie.Title}</h2>
      <p className="text-gray-600 mb-4">
        <strong>Year:</strong> {movie.Year}
      </p>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
        alt={`Poster of ${movie.Title}`}
        className="w-full h-48 object-cover rounded-md border border-gray-200"
      />
    </div>
  );
};

export default MovieCard;
