import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utilis/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utilis/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <Maincontainer />
    </div>
  )
}

export default Browse