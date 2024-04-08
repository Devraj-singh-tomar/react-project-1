import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion"

const Landingpage = () => {
  motion

  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className='textstructure mt-40 px-20'>

        {["We Create", " Eye-Opening", " Presentations"].map((item, index) => {
          return (
            <div key={item} className="masker ">
              <div className=" w-fit flex items-end  ">
                {index === 1 && (
                  <motion.div initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-0 ml-[0px] w-[7vw] rounded-md h-[4.4vw] relative top-[-\1px] bg-red-500 flex justify-center"></motion.div>
                )}
                <h1 className=" uppercase text-[6vw] leading-[5vw] tracking-tighter font-semibold ">{item}</h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">

        {["For public and private companies ", "From the first pitch to IPO"].map((item, index) => (
          <p key={item} className="text-md font-light tracking-tight leading-none ">{item}</p>
        ))}

        <div className="start flex items-center gap-4">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm uppercase ">Start the project </div>

          <div className="w-10 h-10 flex items-center justify-center     rounded-full border-[1px] border-zinc-400">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage
