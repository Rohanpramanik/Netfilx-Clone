import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utilis/moviesSlice";
import { API_OPTIONS } from "../utilis/Constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filteredVideos = jsonData.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailerVideo = filteredVideos.length
      ? filteredVideos[0]
      : jsonData.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
