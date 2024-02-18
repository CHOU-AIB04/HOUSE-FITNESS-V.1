import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Arms } from './Arms/Arms';
import { Back } from './Back/Back';
import { Chest } from './chest/Chest';
import { Legs } from './Legs/Legs';
import './Exercice.css'
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const Exercice = () => {
  let [item,setitem] = useState(1)
  let [exercice,setexercice] = useState(<Chest />)
  let {mode} = useContext(AppContext)
  function clicked(id){
    setitem(id)
    if (id === 1) {
      setexercice(<Chest />)
    }else if(id === 2){
      setexercice(<Back />)
    }else if(id === 3){
      setexercice(<Arms />)
    }else{
      setexercice(<Legs />)
    }
  }
  return (
    <>
     <ul className='relative left-1/2 -translate-x-1/2 w-4/5 small_tablet:w-1/2 flex items-center justify-around down mb-2 z-40'>
        <li className={`hover:text-stone-500 transition-all duration-500 tracking-wide cursor-pointer relative ${mode.text_color} ${item === 1 ? "down_line" : "" } `} onClick={()=>clicked(1)}>Chest</li>
        <li className={`hover:text-stone-500  transition-all duration-500 tracking-wide cursor-pointer relative ${mode.text_color} ${item === 2 ? "down_line" : "" }`} onClick={()=>clicked(2)}>Back</li>
        <li className={`hover:text-stone-500  transition-all duration-500 tracking-wide cursor-pointer relative ${mode.text_color} ${item === 3 ? "down_line" : "" }`} onClick={()=>clicked(3)}>Arms</li>
        <li className={`hover:text-stone-500  transition-all duration-500 tracking-wide cursor-pointer relative ${mode.text_color} ${item === 4 ? "down_line" : "" }`} onClick={()=>clicked(4)}>Legs</li>
      </ul>
      {exercice}
    </>
     

  );
};
