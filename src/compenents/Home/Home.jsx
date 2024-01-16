import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import './Home.css'

export const Home = () => {
  const {mode} = useContext(AppContext)
return (
      <section className={`height justify-evenly small_tablet:justify-around flex items-center relative top-18 flex-col small_tablet:flex-row ${mode.background}`}> 
       <div className="relative top-5 small_tablet:top-0">
         <h1 className={`uppercase text-xl small_tablet:text-3xl font-bold move ${mode.background}`}>Welcome to the House <br /><span className="text-stone-300">Fitness</span></h1>
         <h2 className={`text-xl small_tablettext-2xl font-bold ${mode.text_color}`}>Empower your fitness journey, shop <br /> our top-tier gear today!</h2>
       </div>
       <div >
        <img src={mode.man} className = "w-52 small_tablet:w-80 relative anime " alt="pic" loading="lazy"/>
       </div>
     </section>
  )
}
