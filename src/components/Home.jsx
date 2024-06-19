import React from 'react'


export const Home = () => {
  
  return (
    <section id="home" className='min-h-[150px] px-6 flex flex-col-reverse md:flex-row bg-[#8121D0] items-center mt-[60px]'>
        <div className='flex flex-col gap-6 mt-3 md:mt-0'> 
          <h1 className='text-4xl font-bold'>Hey there, <br /> its Ayodeji Aribigbola</h1>
          <p className='text-2xl'>I'm a Frontend Web Developer, I enjoy building solid and scalable web interfaces for a soothing and relaxed user experience</p>
          <div className='flex items-center gap-8'>
            <button className='border font-semibold text-xl w-[60%] bg-[#331C52] outline-none text-[#FFFFFF] md:border-none rounded-2xl md:w-[40%] md:rounded-3xl p-2 transition-all duration-300 ease-in-out md:hover:bg-[#E1EBED]  md:hover:text-[#331C52] md:hover:border-none'>Projects</button>  
            <button className='border font-semibold text-xl w-[60%] bg-[#331C52] outline-none text-[#FFFFFF] md:border-none rounded-2xl md:w-[40%] md:rounded-3xl p-2 transition-all duration-300 ease-in-out md:hover:bg-[#E1EBED]  md:hover:text-[#331C52] md:hover:border-none'>Contact Me</button>
          </div>
        </div>
        <img src="IMG_1400.JPG" class="w-[70%] md:w-[60%] md:h-[400px] object-contain"/>
      </section>
  )
}
