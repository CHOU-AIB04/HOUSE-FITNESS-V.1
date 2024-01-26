import React from 'react'
import { motion } from 'framer-motion';

export const OutletExercices = (props) => {
    let exercice = props.data.map(function(e){
        return(
            <motion.nav initial={{opacity:0}} transition={{duration:1}} whileInView={{opacity:1}} viewport={{once:true}} id={e.id} key={e.id} className="heigh bg-stone-400 flex flex-col justify-around rounded-md shad items-center gap-2">
                <div className='w-4/5 h-1/2 flex justify-center items-center'>
                    <img src={e.pic} alt=""  className='w-full h-full object-cover rounded-md mt-1'/>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <h1 className='uppercase font-bold underline tracking-widest'>{e.tittle}</h1>
                    <p className='text-sm text-center'>{e.des}</p>
                </div>
            </motion.nav>
        )
    })
  return (
    <>
    {exercice}
    </>
  )
}
