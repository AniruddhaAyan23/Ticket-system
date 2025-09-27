import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import vector1 from "./assets/vector1.png";
import vector2 from "./assets/vector2.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tickets from './tickets';
import Footer from './Footer';

function App() {
  const [progress, set_progress] = useState(0);
  const [resolve, set_resolve] = useState(0);

  
  const handleProgressIncrease = () => {
    set_progress(progress + 1);
  };

  const handleProgressDecrease = () => {
    set_resolve(resolve + 1);
    set_progress(progress - 1);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="CS text-xl ml-4 font-bold">CS-Ticket System </a>
        </div>
        <div className="flex-none">
          <div className="nav space-x-6">
            <span>Home </span>
            <span>FAQ </span>
            <span>Changelog </span>
            <span>Blog </span>
            <span>Download </span>
            <span>Contact </span>
            <button className="new tickets mr-4 p-4 bg-[#422AD5] text-white rounded">
              <FontAwesomeIcon icon={faPlus} />
              New Ticket
            </button>
          </div>
        </div>
      </div>

      <div className='container flex justify-center items-center space-x-10 h-[400px] w-[1000px] mx-auto my-6'>
  <div className="left-box overflow-hidden rounded-2xl flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[280px] w-[500px] px-6">
    <img className=' h-[280px] w-[200px]' src={vector1} alt="vector1" />
    <p className='text-white text-xl font-semibold text-center mx-4'>
      In-Progress<br />
      <span className="text-3xl font-bold">{progress}</span>
    </p>
    <img className='h-[280px] w-[200px] transform scale-x-[-1]' src={vector1} alt="vector1" /> 
  </div>

  <div className='right-box overflow-hidden rounded-2xl flex justify-center items-center bg-gradient-to-r from-[#54CF68] to-[#00827A] border-green-600 h-[280px] w-[500px]'>
    <img className='h-[280px] w-[200px]' src={vector1} alt="vector1" />
    <p className='text-white text-xl font-semibold text-center mx-4'>
      Resolved<br />
      <span className="text-3xl font-bold">{resolve}</span>
    </p>
    <img className='h-[280px] w-[200px] transform scale-x-[-1]' src={vector1} alt="vector1" /> 
  </div>
</div>

      <div>
        <Tickets 
          onProgressIncrease={handleProgressIncrease}
          onProgressDecrease={handleProgressDecrease}
        />
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      <vector2></vector2>
    </>
    
  )
}

export default App