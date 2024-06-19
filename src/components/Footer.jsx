import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col h-[150px] justify-center bg-[#331652] text-slate-100 p-4 gap-4'>
        <h2>Ayodeji Aribigbola</h2>
        <p>Built with Html and Tailwind Css</p>
        <div className='flex items-center gap-5'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <p>
          <span><FontAwesomeIcon icon={faCopyright} /> Copyright 2023.</span>
          <span>Built by Ayodeji Aribigbola</span>
        </p>
      </footer>
  )
}
