import React from "react";
import MovieCard from "./MovieCard";
import "../App.css"

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  return (
    <div>
      <h1 className="text-2xl font-bold p-2">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
            <div className="mx-2">
                <MovieCard key='movie.id' poster={movie.poster_path} />
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default MovieList;
