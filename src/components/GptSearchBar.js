import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='flex justify-center items-center w-1/2'>
        <form className='w-full grid grid-cols-12 bg-black' onSubmit={(e) => e.preventDefault()}>
            <input type='text' className='p-4 m-4 col-span-9' placeholder="Getting confused? don't worry I'm there..." />
            <button className='py-2 px-4 m-4 bg-red-400 text-white col-span-3 rounded-lg'>search</button>
        </form>
    </div>
  )
}

export default GptSearchBar