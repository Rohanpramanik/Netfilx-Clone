import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utilis/LanguageConstant';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='flex justify-center items-center w-1/2'>
        <form className='w-full grid grid-cols-12 bg-black' onSubmit={(e) => e.preventDefault()}>
            <input type='text' className='p-3 m-3 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 m-3 bg-red-400 text-white col-span-3 rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;