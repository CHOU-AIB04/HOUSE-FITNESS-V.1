import React ,{useState,useContext}from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';
import { AppContext } from '../AppContext';
import black_house from '../../img/black_version.png';
import white_house from '../../img/house_logo_wheat.png';
import black_muscle from '../../img/muscle2.png';
import white_muscle from '../../img/muscles.png'

export const Navbar = () => {
    const {mode} = useContext(AppContext)
    const {setmode} = useContext(AppContext)
    // this state it's for navbar , button and mode div in phone screen
    let [show,setshow] = useState({
        list : "bi bi-list",
        opacity : "opacity-0"
    })
    function shownav(){
        setshow(function(prev){
            return {
                ...prev,
                list : prev.list === "bi bi-list" ? "bi bi-x" : "bi bi-list",
                opacity : prev.opacity === "opacity-0" ? "opacity-100" : "opacity-0"
            }
        })
    }
    function switch_mode(){
        setmode(function(prev){
            return{
                ...prev,
                icon : prev.icon === "bi bi-brightness-high-fill" ? "bi bi-moon" : "bi bi-brightness-high-fill",
                icon_pos : prev.icon_pos === "-left-1" ? "left-7" : "-left-1",
                background : prev.background === "#f3f4f6" ? "#475569" : "#f3f4f6",
                text_color : prev.text_color === "text-black" ? "text-white" : "text-black",
                logo : prev.logo === black_house ? white_house : black_house,
                man : prev.man === black_muscle ? white_muscle : black_muscle,
                product_color : prev.product_color === "bg-slate-200" ? "bg-stone-200" : "bg-slate-200",
                text_product : prev.text_product === "text-black" ? "text-stone-800" : "text-black"
            }
        })
        
    }
let [click,setclick] = useState(1)
function handle_click(id) {
   setclick(id)
   window.scrollTo({
    top : 400,
    behavior : "smooth"
   })
   setshow(function(prev){
    return{
        ...prev,
        list : prev.list = "bi bi-list",
        opacity : prev.opacity = "opacity-0"

    }
   })
}

  return (
    <>
   <header className={`h-16 bg-stone-400 shadow-effect rounded-b-md fixed w-full flex z-50 justify-around items-center transition-all duration-500`}>
        <div className="relative right-15 flex flex-col small_tablet:flex-row gap-1 small_tablet:gap-3 items-center">
            <Link to="/"><img src={mode.logo} alt="logo" className="w-16 small_tablet:w-20 transition-all duration-500 hover:scale-105 cursor-pointer"/></Link>
            <h1 className={`text-sm small_tablet:text-xl font-bold  uppercase ${mode.text_color}`}>House <span className="text-stone-200">Fitness</span></h1>
        </div>
        <nav className={`relative -right-3 ${show.opacity} tablet:opacity-100 tablet:right-20 flex-col tablet:flex-row top-40 bg-slate-400 h-64 tablet:h-0 tablet:-top-3 flex justify-around tablet:justify-between pl-6 tablet:pl-0 rounded-md tablet:w-1/2 w-2/3 gap-0 tablet:gap-7`}>
            <ul className="flex  gap-7 tablet:gap-5 flex-col tablet:flex-row">
                <li id="li"><Link to="/" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color} relative ${click === 1 ? "linee text-yellow-300" : ""} tracking-wide`} onClick={() => handle_click(1)}>Supplements</Link></li>
                <li id="li"><Link to="/Materials" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color}  relative ${click === 2 ? "linee text-yellow-300" : ""}  tracking-wide`} onClick={() => handle_click(2)}>Materials</Link></li>
                <li id="li"><Link to="/exercices" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color} relative ${click === 3 ? "linee text-yellow-300" : ""} tracking-wide`} onClick={() => handle_click(3)}>Exercices</Link></li>
                <li id="li"><Link to="/Contact" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color} relative ${click === 4 ? "linee text-yellow-300" : ""}  tracking-wide`} onClick={() => handle_click(4)}>Contact</Link></li>
            </ul>
            <div className="flex-col justify-between sm:justify-start flex sm:flex-row h-16 items-center relative top-0 tablet:-top-5">
            <Link to="/account"><button className="h-7 w-32 rounded-md bg-white shadow-effect transition-all duration-700 hover:text-wheat hover:tracking-wide hover:shadow-inset" onClick={handle_click}>Log In</button></Link>
            <div className="w-12 h-5 rounded-2xl bg-stone-200 ml-10 relative cursor-pointer" onClick={switch_mode}>
                <i className={`${mode.icon} text-gray-700 text-2xl absolute -top-2 ${mode.icon_pos} transition-all duration-500`}></i>    
            </div>
            </div>
        </nav>
    </header>
    <i className={`${show.list} fixed z-50 tablet:hidden  top-4 right-7 text-2xl font-bold transition-all duration-200 cursor-pointer hover:scale-105 hover:text-yellow-600`} onClick={shownav}></i>
    </>
  )
};
