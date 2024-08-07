import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BACKGROUND_IMAGE } from '../utilis/Constant';

const GptSearch = () => {
  return (
    <div className='relative flex justify-center items-center h-screen bg-cover bg-center'
    style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
  >
      <GptSearchBar />
    </div>
  )
}

export default GptSearch;