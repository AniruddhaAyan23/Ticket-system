import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';


import vector1 from "./assets/vector1.png";
import vector2 from "./assets/vector2.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';





function App() {
  

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
<div className='container flex justify-center items-center space-x-10 border-4 border-red-400 h-100 w-400'>
  <div className="left-box rounded-2xl flex justify-center items-center border-2 border-blue-600 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[280px] w-[600px] px-6">
  <img className=' h-70 w-70 ' src={vector1} alt="vector1" />In-Progress
  <img className=' h-70 w-70 transform scale-x-[-1] ' src={vector1} alt="vector1" /> 
  </div>
 

  <div className='right-box rounded-2xl flex justify-center items-center border-2 bg-gradient-to-r from-[#54CF68] to-[#00827A] border-green-600 h-70 w-150'>
    <img className=' h-70 w-70 ' src={vector1} alt="vector1" />Resolved
  <img className=' h-70 w-70 transform scale-x-[-1] ' src={vector1} alt="vector1" /> 
  </div>
 </div>

      
      
      
    </>
  )

}
export default App
