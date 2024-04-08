import React from 'react'

const About = () => {
    return (
        <div  className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
            <h1 className='text-[4vw]  leading-[4.5vw] tracking-tight'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>

            <div className='w-full flex gap-60 pt-10 border-t-[1px] mt-20 border-[#3e4914] '>
                <div className="w-1/2">
                    <h1 className='text-[3vw]'>Our approch:</h1>
                    <button className='flex items-center gap-6 uppercase px-7 py-4 mt-10 bg-zinc-900 rounded-full text-white'>
                        Read More
                        <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
                    </button>
                </div>

                <div className="w-1/2 h-[50vh] ">
                    <img className='rounded-3xl w-[40vw] ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image" />
                </div>
            </div>
        </div>
    );
}

export default About
