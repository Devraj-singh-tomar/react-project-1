import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Slidingtext from './components/Slidingtext'
import About from './components/About'
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>

      <Navbar />
      <Landingpage />
      <Slidingtext />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  )
}

export default App