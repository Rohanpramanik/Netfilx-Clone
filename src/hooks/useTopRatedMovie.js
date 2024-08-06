import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/Constant";


const useTopRatedMovie = () => {
    const dispatch = useDispatch();
    
    const getTopRatedMovie = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const jsonData = await data.json();
      dispatch(addTopRatedMovies(jsonData.results));
    }
  
    useEffect(()=>{
        getTopRatedMovie();
    },[])
  
}

export default useTopRatedMovie;