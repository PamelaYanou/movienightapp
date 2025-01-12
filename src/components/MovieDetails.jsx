import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          {movie.Title}
        </h2>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={`Poster of ${movie.Title}`}
          className="w-full h-80 object-cover rounded-md mb-6"
        />
        <div className="space-y-4 text-gray-700">
          <p>
            <strong className="text-gray-900">Year:</strong> {movie.Year}
          </p>
          <p>
            <strong className="text-gray-900">Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong className="text-gray-900">Director:</strong>{" "}
            {movie.Director}
          </p>
          <p>
            <strong className="text-gray-900">Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong className="text-gray-900">Rating:</strong>{" "}
            {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
