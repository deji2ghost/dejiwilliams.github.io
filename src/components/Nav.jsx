import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Nav = () => {

    const [clicked, setClicked] = useState(false)

    const handleClicked = () => {
        setClicked(!clicked)
    }
  return (
    <header className='items-center fixed w-full top-0 drop-shadow-lg text-[#FFFFFF] bg-[#331652] z-50'>
        <div className='py-4 px-6 flex items-center justify-between'>
          <div>
            <h1 className='text-xl font-mono font-bold'>Ayodeji Aribigbola</h1>
          </div>
          <div className='hidden md:flex items-center gap-14'>
            <a href="#home" className=''>Home</a>
            <a href="#about" className=''>About</a>
            <a href="#work" className=''>Work</a>
            <a href="#connect" className=''>Connect</a>
          </div>

          <FontAwesomeIcon onClick={handleClicked} icon={faBars} className='cursor-pointer md:hidden' />
          <div className={`${clicked ? 'transform translate-x-0' : 'transform translate-x-full'} flex flex-col transition ease-in-out duration-700 items-center gap-14 fixed bg-[#331652] top-[60px] h-screen w-[40%] right-0`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#connect">Connect</a>
          </div>
        </div>
    </header>
  )
}
