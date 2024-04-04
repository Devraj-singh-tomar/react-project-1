import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';

const App = () => {
  return (
   <div className='w-full h-screen bg-zinc-900 text-white'>

      <Navbar />
      <Landingpage />
    </div>
  )
}

export default App