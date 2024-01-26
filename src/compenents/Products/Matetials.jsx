import React from 'react'
import { motion ,MotionConfig} from "framer-motion"
import './Product.css'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import Material from './Material'
import { Details } from '../Details'
import { useNavigate } from 'react-router-dom'



export const Materials = () => {
  let DetailPage = useNavigate()
  let {mode} = useContext(AppContext)
  let {setdetail} = useContext(Details)
  function HandleDetails(id){
    let index = id-1
    let product = Material[index]
    setdetail(function(prev){
      return{
        ...prev,
        product_name : product.tittle,
        pic1 : product.src,
        des : product.des,
        reviews : product.review,
        price : product.price,
        fake_price : product.fake_price
      }
    })
    DetailPage("/Machine_Details")
  }
  let product = Material.map(function(e){
    return(
      <MotionConfig transition={{duration:2}}>
        <motion.nav initial={{ opacity: 0}}  whileInView={{ opacity: 1}} viewport={{ once: true }} id={e.id} key= {e.id} className ={`relative height w-64 ${mode.product_color} flex flex-col gap-2 items-center rounded-md sh transition-all duration-500 cursor-pointer scal`}>
          <div className={`h-1/2 w-4/5 rounded-md overflow-hidden relative top-1 cursor-pointer`}>
            <img src={e.src} className={`w-4/8 h-full object-cover`} alt="pic"/>
          </div>
          <div className="flex flex-col items-center">
            <h1 className='font-bold uppercase underline'>{e.tittle}</h1>
            <div className='flex flex-col gap-1 items-center'>
              <p className={`size ml-1 dis ${mode.text_product} transition-all duration-500`}>{e.des}</p>
              <h2 className='text-black text-xl'>{e.price} /<span className='line-through text-gray-500 text-sm'>{e.fake_price}</span></h2>
              <div className='flex gap-3 items-center'>
                <p className="text-gray-600 text-sm">{e.review} reviews</p>
                <div>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                <i className="bi bi-star-fill text-yellow-500"></i>
                </div>
              </div>
            </div>
          </div>
          <button className="w-36 absolute bottom-1 rounded-md hover:scale-105 cursor-pointer h-8 bg-neutral-800 text-white transition-all duration-500 hover:text-yellow-200" onClick={()=>HandleDetails(e.id)}><i className="bi bi-bag"></i>Shop Now</button>
        </motion.nav>
      </MotionConfig>
    )
  })
  return (
    <section className={`${mode.background} w-full  flex flex-col items-center`}>
      <h1 className={`font-bold text-3xl relative el ${mode.text_color}`}>Materials</h1>
      <motion.article initial={{gap:"100px"}}  whileInView={{gap:"20px"}} viewport={{once:true}} className={`bg-transparent line w-full relative top-12 grid grid-cols-1 small_tablet:grid-cols-3 tablet:grid-cols-4 sm:grid-cols-2  justify-items-center gap-5 transition-all durantion-500`}>
        {product}
      </motion.article>
    </section>
  )
}

