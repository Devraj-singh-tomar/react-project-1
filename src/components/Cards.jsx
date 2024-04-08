import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-6 items-center px-28 bg-zinc-900 '>
      <div className='cardcontainer w-1/2 h-[55vh]'>
        <div className="card relative flex items-center justify-center rounded-2xl w-full h-full bg-[#004D43]">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute rounded-full  px-3 py-1 border-2 left-10 bottom-8'>&copy;2019-2024</button>
        </div>
      </div>

      <div className='cardcontainer flex gap-5 w-1/2 h-[55vh] '>
        <div className="card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-[#212121]">
          <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute rounded-full  px-3 py-1 border-2 left-10 bottom-8'>&copy;2019-2024</button>
        </div>
        <div className="card relative flex items-center justify-center rounded-2xl w-1/2 h-full bg-[#212121]">
          <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute rounded-full  px-3 py-1 border-2 left-10 bottom-8'>&copy;2019-2024</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
