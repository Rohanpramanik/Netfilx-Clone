import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovie from '../hooks/useTopRatedMovie';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie()
  return (
    <div className='bg-black text-white'>
      <Header/>
      <Maincontainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse