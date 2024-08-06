import React from "react";
import { IMG_CDN_URL } from "../utilis/Constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-28">
      <img alt="movie" src={IMG_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
