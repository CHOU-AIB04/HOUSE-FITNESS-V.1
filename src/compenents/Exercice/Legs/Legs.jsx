import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { OutletExercices } from '../OutletExercices'
import InfoLegs from './InfoLegs'

export const Legs = () => {
  let {mode} = useContext(AppContext)
  return (
    <article className='w-4/5 flex flex-col items-center gap-8 relative left-1/2 -translate-x-1/2 top-7'>
      <h1 className= {`font-bold text-3xl relative el ${mode.text_color}`}>Legs Exercices</h1>
      <section className={`w-full grid grid-cols-1 tablet:grid-cols-3 sm:grid-cols-2 gap-20 place-items-center relative top-10`}>
      <OutletExercices key = {3} data = {InfoLegs}/>
    </section>
    </article>
  )
}
