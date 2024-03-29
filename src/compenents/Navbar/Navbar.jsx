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
        opacity : "hidden"
    })
    function shownav(){
        setshow(function(prev){
            return {
                ...prev,
                list : prev.list === "bi bi-list" ? "bi bi-x" : "bi bi-list",
                opacity : prev.opacity === "hidden" ? "flex" : "hidden"
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
        opacity : prev.opacity = "hidden"

    }
   })
}
function logo_click(){
    scrollTo({
        top : 0,
        behavior : "smooth"
    })
}
let styles = {
    color : "yellow"
}
  return (
    <> 
   <header className={`h-16 bg-stone-400 shadow-effect rounded-b-md fixed w-full  z-50 transition-all duration-500`}>
        <div className="absolute left-9 top-2 tablet:top-4 flex flex-col small_tablet:flex-row gap-1 small_tablet:gap-3 items-center">
            <Link to="/HOUSE-FITNESS-V2/Supplements"><img src={mode.logo} alt="logo" className="w-16 small_tablet:w-20 transition-all duration-500 hover:scale-105 cursor-pointer" onClick={logo_click}/></Link>
            <h1 className={`text-sm small_tablet:text-xl font-bold  uppercase ${mode.text_color}`}>House <span className="text-stone-200">Fitness</span></h1>
        </div>
        <nav className={`absolute right-0 tablet:right-20 top-16 tablet:top-4 ${show.opacity} tablet:flex    flex-col tablet:flex-row  bg-slate-400 h-64 tablet:h-0  justify-around tablet:justify-between pl-6 tablet:pl-0 rounded-md tablet:w-1/2 w-full gap-0 tablet:gap-10`}>
            <ul className="flex  gap-7 tablet:gap-4 flex-col tablet:flex-row">
                <li><NavLink to="" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color} relative  tracking-wide text-sm`} onClick={() => handle_click(1)} style={({isActive})=> isActive ? styles : null}>Supplements</NavLink></li>
                <li><NavLink to="/HOUSE-FITNESS-V.1/Materials" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color}  relative   tracking-wide text-sm`} onClick={() => handle_click(2)} style={({isActive})=> isActive ? styles : null}>Materials</NavLink></li>
                <li><NavLink to="/HOUSE-FITNESS-V.1/exercices" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color} relative  tracking-wide text-sm`} onClick={() => handle_click(3)} style={({isActive})=> isActive ? styles : null}>Exercices</NavLink></li>
                <li><NavLink to="/HOUSE-FITNESS-V.1/Contact" className={`hover:text-yellow-200 transition-all duration-500 ${mode.text_color} relative   tracking-wide text-sm`} onClick={() => handle_click(4)} style={({isActive})=> isActive ? styles : null}>Contact Us</NavLink></li>
            </ul>
            <div className="justify-start flex h-16 items-center relative top-0 tablet:-top-5">
            <Link to="/HOUSE-FITNESS-V.1/account"><button className="h-7 w-32 rounded-md bg-white shadow-effect transition-all duration-700 hover:text-wheat hover:tracking-wide hover:shadow-inset" onClick={handle_click}>Log In</button></Link>
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
