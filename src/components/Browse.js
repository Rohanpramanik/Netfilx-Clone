import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utilis/Constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utilis/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className='bg-black text-white'>
      <Header/>
      <Maincontainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse