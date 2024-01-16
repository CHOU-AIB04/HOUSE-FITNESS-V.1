import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import './Footer.css'
export const Footer = () => {
  const {mode} = useContext(AppContext)
  return (
    <footer className={`relative top-28 w-full ${mode.background} transition-all duration-500`} >
      <section className="shadow-md h-16 flex bg-stone-400 justify-around items-center flex-col tablet:flex-row gap-3 small_tablet:gap-0">
        <p className={`${mode.text_color} sise small_tablet:text-sm`}>Send your email to our stuff for more details about our service and how things work!</p>
        <div className="border border-gray-950 w-96 min-h-8 overflow-hidden rounded-md">
          <input type="text" placeholder='Send Email' className="w-3/4 h-8 pl-2 focus:outline-none"/>
          <button className={`h-8 w-1/4 font-bold bg-slate-200 transition-all duration-500 hover:text-yellow-800`}><i className="bi bi-envelope mr-3"></i>Send</button>
        </div>
      </section>
      <section className={`${mode.background} flex justify-center items-center shadow-inner flex-col small_tablet:flex-row`}>
        <nav className="h-44 flex items-center flex-col">
        <div className="flex flex-col gap-3 items-center relative top-2">
          <img src={mode.logo} alt="house" className="w-32 transition-all duration-800" />
          <h1 className={`font-bold uppercase text-2xl ${mode.text_color} transition-all duration-800`}>House <span className="text-stone-300">Fitness</span></h1>
        </div>
        <div className="flex gap-4  relative top-5">
          <i className="bi bi-facebook text-2xl hover:text-yellow-400 duration-500 transition-all cursor-pointer hover:scale-110"></i>
          <i className="bi bi-twitter text-2xl hover:text-yellow-400 duration-500 transition-all cursor-pointer hover:scale-110"></i>
          <i className="bi bi-instagram text-2xl hover:text-yellow-400 duration-500 transition-all cursor-pointer hover:scale-110"></i>
          <i className="bi bi-linkedin text-2xl hover:text-yellow-400 duration-500 transition-all cursor-pointer hover:scale-110"></i>
        </div>
        <h2 className="text-stone-400 mt-7">All right reserved @2024</h2>
        </nav>
      </section>
    </footer>
  )
}
