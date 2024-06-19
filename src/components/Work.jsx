import React from 'react'
import { productLists } from '../data/data'
import { Header } from './Header'
import { Link } from 'react-router-dom'

export const Work = () => {
  return (
    <section id="work" className='min-h-[150px] px-6'>
        <Header title='Projects' />

        <div className='flex flex-col gap-4 md:grid md:grid-cols-3'>
          {
            productLists.map(product => {
              return(
                <div key={product.id} className='p-2'>
                  <h1 className='text-xl font-bold'>{product.projectName}</h1>
                  <p>{product.overView}</p>
                  <Link to={product.path} ><button className='bg-gray-800 text-[#FDFFED] md:bg-transparent md:border md:border-gray-800 py-1 px-2 rounded-md md:text-gray-800 md:hover:bg-gray-800 md:hover:text-[#FDFFED] transition-all ease-in-out duration-150'>View Project</button></Link>
                </div>
              )
            })
          }
        </div>
      </section>
  )
}
