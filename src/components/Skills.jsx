import React from 'react'
import { skillList } from '../data/data'
import { Header } from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skills = () => {
  return (
    <section id="skills" className='min-h-[150px] px-6'>
        <Header title='Skills'/>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-3 justify-center w-full'>
          {
            skillList.map(skill => {
              return(
                <div key={skill.id} className="flex flex-col h-[150px] items-center justify-center bg-[#331C52] text-[#FDFFED] md:border md:border-[#DCCFED] rounded-lg md:w-[60%] transition-all duration-300 ease-in-out cursor-pointer md:hover:translate-y-[-5px] md:hover:bg-gray-800  md:hover:text-[#FDFFED] md:hover:border-none md:mx-auto one box"><FontAwesomeIcon icon={skill.icon}/> <h1>{skill.name}</h1></div>
              )
            })
          }
        </div>
      </section>
  )
}
