import React from 'react'
import { Header } from './Header'

export const Connect = () => {
  return (
    <section class="connect" className='min-h-[150px] px-6 py-3'>
        <Header title='Contact Me' />
        <h1 className='text-[#291C3A] font-bold text-2xl mb-3'>Let's discuss something cool together</h1>
        <form action='https://formspree.io/f/mjvnnna1' method="POST" className='p-4 bg-[#DCCFED] flex flex-col gap-4 rounded-lg shadow-md'>
          <div className='flex flex-col justify-center'>
            <label>Name</label>
            <input type='text' id='email' placeholder='Enter your name' className='border-none rounded-md outline-none bg-[#fdffed] p-2'/>
          </div>
          <div className='flex flex-col justify-center'>
            <label>E-mail</label>
            <input type='text' id='email' placeholder='Enter your e-mail' className='border-none rounded-md outline-none bg-[#fdffed] p-2'/>
          </div>
          <div className='flex flex-col justify-center'>
            <label>Message</label>
            <textarea type='text' id='email' placeholder='Enter your message' className='border-none rounded-md outline-none bg-[#fdffed] p-2 h-[100px]'/>
          </div>
          <button type='submit' className='w-[30%] bg-[#331652] text-[#FDFFED] md:bg-[#FDFFED] py-1 px-2 rounded-md md:text-[#331652] md:hover:bg-[#331652] md:hover:text-[#FDFFED] transition-all ease-in-out duration-150 text-center ml-[70%]'>Submit</button>
        </form>
      </section>
  )
}
