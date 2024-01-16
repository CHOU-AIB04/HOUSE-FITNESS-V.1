import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Details } from '../Details'
import morroco from '../../img/countries/morroco.png'
import usa from '../../img/countries/Usa.png'
import Uk from '../../img/countries/can.png'
import china from "../../img/countries/china.png"
import ger from '../../img/countries/ger.png'
import can from '../../img/countries/can.png'
import visa from '../../img/banque/mas.png'
import mas from "../../img/banque/visa.png"
import './Detail.css'
import { AppContext } from '../AppContext'

export const Detail = () => {
    let[index,setindex] = useState(1)
    let {detail} = useContext(Details)
    let {mode} = useContext(AppContext)
    let [payment,setpayment] = useState({
      justify : "justify-evenly",
      visibility : "hidden",
      height : "hei2"
    })
    function show_payment(){
      setpayment(function(prev){
        return{
          ...prev,
          justify : "justify-around",
          visibility : "visible",
          height : "hei1"
        }
      })
    }
    function switch_pic(id){
      setindex(id)
    }
  return (
    <>
    <article className={`flex w-80 sm:w-2/3 ${payment.height} ${payment.justify} items-center flex-col bg-stone-400 sha rounded-md relative left-1/2 -translate-x-1/2 gap-10`}>
      <h1 className={`ml text-md sm:text-2xl  underline tracking-widest relative uppercase font-bold ${mode.text_color} transition-all duration-500 relative top-6`}>{detail.product_name}</h1>
      <section className='w-full h flex flex-col gap-3 items-center'>
        <div className='w-full small:w-96 rounded-md overflow-hidden sh'>
        <img src={detail.pic1} alt="pic"  className='w-full h-full object-cover'/>
        </div>
        <nav className='w-full sm:w-96 h-24 flex justify-between gap-3'>
          <div className={`h-full w-24 rounded-md overflow-hidden  sh ${index === 1 ? "bor": ""} cursor-pointer`} onClick={()=>switch_pic(1)}>
            <img src={detail.pic1} alt="picture" className='w-full h-full object-cover'/>
            </div>
          <div className={`h-full w-24 rounded-md overflow-hidden  sh ${index === 2 ? "bor": ""} cursor-pointer`}>
            <img src={detail.pic1} alt="picture" className='w-full h-full object-cover' onClick={()=>switch_pic(2)}/>
            </div>
          <div className={`h-full w-24 rounded-md overflow-hidden  sh ${index === 3 ? "bor": ""} cursor-pointer`}>
            <img src={detail.pic1} alt="picture" className='w-full h-full object-cover' onClick={()=>switch_pic(3)}/>
            </div>
          <div className={`h-full w-24 rounded-md overflow-hidden  sh ${index === 4 ? "bor": ""} cursor-pointer`}>
            <img src={detail.pic1} alt="picture" className='w-full h-full object-cover' onClick={()=>switch_pic(4)}/>
            </div>
        </nav>
      </section>
      <section className={`flex flex-col items-center gap-10`}>
        <div className='flex flex-col items-center gap-2'>
          <p className={`text-center text-sm sm:text-md ${mode.text_color} transition-all duration-500 sm:w-1/2 w-full `}>{detail.des}</p>
          <div className='flex gap-6'>
            <p className='text-stone-200'>{detail.reviews} reviews</p>
            <div className='flex gap-1'>
              <i className="bi bi-star-fill text-yellow-500"></i>
              <i className="bi bi-star-fill text-yellow-500"></i>
              <i className="bi bi-star-fill text-yellow-500"></i>
              <i className="bi bi-star-fill text-yellow-500"></i>
              <i className="bi bi-star-fill text-yellow-500"></i>
            </div>
          </div>
          <h2 className={`text-2xl font-bold ${mode.text_color} transition-all duration-500`}>{detail.price} / <span className='text-sm font-sans line-through text-stone-200'>{detail.fake_price}</span></h2>
          <button className='w-48 h-8 cursor-pointer  bg-yellow-600 rounded-md transition-all duration-500 hover:scale-105 hover:text-yellow-600 hover:bg-stone-200 text-white mt-1 relative bottom-2' onClick={show_payment}><i className="bi bi-credit-card mr-2"></i>Payement Method</button>
        </div>
        <div className={`${payment.visibility} flex flex-col items-center method w-full sm:w-96 justify-around bg-stone-400 border-2 border-black relative rounded-md  bottom-7`}>
          <input type="text" placeholder='Full Name' className='wh h-10 rounded-md pl-2 bg-stone-200 focus:outline-none'/>
          <input type="text" placeholder='Email' className='wh h-10 rounded-md pl-2 bg-stone-200 focus:outline-none'/>
          <input type="text" placeholder='ID' className='wh h-10 rounded-md pl-2 bg-stone-200 focus:outline-none'/>
          <select name="" id="" className='wh h-10 rounded-md pl-2 bg-stone-200 focus:outline-none'>
            <option value="">Morroco</option>
            <option value="">Usa</option>
            <option value="">UK</option>
            <option value="">Germanie</option>
            <option value="">China</option>
            <option value="">Canada</option>
          </select>
          <div className='wh h-10 rounded-md pl-2 bg-stone-200 flex overflow-hidden'>
            <select name="" id="" className='W-20 relative right-3 bg-transparent focus:outline-none pl-2'>
              <option value="" className='text-sm'>Visa</option>
              <option value="" className='text-sm'>Mastercard</option>
            </select>
            <input type="text" placeholder='Code' className="in bg-transparent focus:outline-none  pl-2"/>
          </div>
          <input type="number" name="" id="" defaultValue={1} className="wh h-10 rounded-md pl-2 bg-stone-200 focus:outline-none"/>
          <button className='w-44 h-7 cursor-pointer bg-yellow-600 rounded-md transition-all duration-500 hover:scale-105 hover:text-yellow-600 hover:bg-stone-200 text-white mt-1'><i className="bi bi-bag mr-2"></i>Buy Now</button>
        </div>

      </section>
    </article>
    </>
  )
}
