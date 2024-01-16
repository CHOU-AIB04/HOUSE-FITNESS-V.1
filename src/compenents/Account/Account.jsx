import React,{useState} from 'react'
import './Account.css'

export const Account = () => {
  let[form,setform] = useState("Log In")
  let[types,setype] = useState({
    icon1 : "bi bi-eye-slash",
    type1 :"password",
    icon2 : "bi bi-eye-slash",
    type2 :"password"
  })
  function switch_type(id){
    if (id === 1) {
      setype(function(prev){
        return {
          ...prev,
          icon1 : prev.icon1 === "bi bi-eye-slash" ? "bi bi-eye" : "bi bi-eye-slash",
          type1 : prev.type1 === "password" ? "text" : "password"
        }
      })
    }
    if (id === 2) {
      setype(function(prev){
        return {
          ...prev,
          icon2 : prev.icon2 === "bi bi-eye-slash" ? "bi bi-eye" : "bi bi-eye-slash",
          type2 : prev.type2 === "password" ? "text" : "password"
        }
      })
    }

  }
  function switch_to_sign(){
    setform("Sign Up")
  }
  function switch_to_log(){
    setform("Log In")
  }
  return (
    <section className='sizee tablet:w-2/3 top-4 rounded-md border-white border-2 bg-stone-400 flex justify-around items-center flex-col  relative left-1/2 -translate-x-1/2'>
      <h1 className='font-bold text-xl text-white uppercase underline'>{form}</h1>
      <div className='flex flex-col gap-2'>
      <nav className='flex flex-col gap-8'>
        {form === "Sign Up" ? 
        <input type="text" placeholder='Username' className='h-10 w-72 rounded-md tracking-wide pl-2'/> : <></>}
        <input type="email" placeholder='Email' className='h-10 w-72 rounded-md tracking-wide pl-2'/>
        <div className='w-72 relative'>
          <input type={types.type1} placeholder='Password' className='h-10 w-72 rounded-md tracking-wide pl-2'/>
          <i className={`${types.icon1} absolute top-2 text-md right-2 transition-all duration-300` } onClick = {()=>switch_type(1)}></i>
        </div>
        {form === "Sign Up" ? 
        <div className='w-72 relative'>
          <input type={types.type2} placeholder='Comfirm Password' className='h-10 w-72 rounded-md tracking-wide pl-2'/>
          <i className={`${types.icon2} absolute top-2 text-md right-2 transition-all duration-300`} onClick = {()=>switch_type(2)} ></i>
        </div> : <></>
        }
        
      </nav>
      {form === "Log In" ? <a href="#" className='text-white text-sm'>Forgot password ?</a> : <></>}
      </div>
      <div className='flex w-80 justify-between items-center'>
        <button type='submit' className={`w-28 bg-slate-500 h-8 rounded-md text-white font-bold ${form === "Sign Up" ? "clicked" : ""}`} onClick={switch_to_sign}>Sign UP</button>
        <button type='submit' className={`w-28 bg-slate-500 h-8 rounded-md text-white font-bold ${form === "Log In" ? "clicked" : ""}`} onClick={switch_to_log}>Log In</button>
      </div>
    </section>
  )
}
