import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/Constant";


const usePopularMovie = () => {
    const dispatch = useDispatch();
    const getPopularMovie = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const jsonData = await data.json();
      dispatch(addPopularMovies(jsonData.results));
    }
  
    useEffect(()=>{
      getPopularMovie();
    },[])
  
}

export default usePopularMovie;