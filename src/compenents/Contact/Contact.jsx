import React from 'react'
import './Contact.css'
import { motion} from 'framer-motion'

export const Contact = () => {
  return (
      <motion.section initial={{left:"0%"}} transition={{duration:0.2}} whileInView={{left:"50%"}} className="property w-full small:w-2/3 bg-stone-300 relative  top-3 rounded-md  -translate-x-1/2 flex flex-col justify-around items-center">
          <input type="text" name="name" id="name" placeholder='Full name' className='text-sm h-10 w-72 small_tablet:w-4/5 rounded-md pl-2 share  '/>
          <input type="text" name="Email" id="Email" placeholder='Email' className='text-sm h-10 w-72 small_tablet:w-4/5 rounded-md pl-2 share  '/>
          <input type="text" name="Email" id="Email" placeholder='Subject' className='text-sm h-10 w-72 small_tablet:w-4/5 rounded-md pl-2 share  '/>
          <textarea name="message" id="message" placeholder='Message' className='text-sm w-72 small_tablet:w-4/5 max-h-36 min-h-20 rounded-md pl-2 pt-2 share'></textarea>
        <button type="submit" className='w-36 h-7 rounded-md transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-orange-200 hover:text-white font-bold bg-stone-600'><i className="bi bi-envelope text-xl mr-2"></i>Send</button>
      </motion.section>
  )
}
