import { motion } from 'framer-motion'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Slidingtext = () => {

    motion

    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className="flex overflow-hidden whitespace-nowrap text border-t-2 border-b-2  border-zinc-300 ">

                <Marquee speed={100} loop={0} onCycleComplete={null} autoFill={true} className='overflow-hidden gap-10' >
                    <h1 className='flex flex-row text-[16vw] leading-none font-semibold uppercase mb-8  '>
                        UI clone using react js
                    </h1>
                </Marquee>

                {/* <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }}  transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='flex flex-row text-[16vw] leading-none font-semibold uppercase mb-8  '>
                    UI clone using 
                </motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }} className='flex flex-row text-[16vw] leading-none font-semibold uppercase mb-8  '>
                    React js
                </motion.h1> */}

            </div>
        </div>
    )
}

export default Slidingtext
