import React, {useState} from 'react'
import './nav.css'


import {RiHome2Line, RiUserLine, RiFolderOpenLine, RiMessage3Line} from 'react-icons/ri'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#'
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' :''}><RiHome2Line/></a>
      <a href='#about' 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' :''}><RiUserLine/></a>
      <a href='#portfolio'
      onClick={() => setActiveNav('#portfolio')} 
      className={activeNav === '#portfolio' ? 'active' :''}><RiFolderOpenLine/></a>
      <a href='#contact'
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' :''}><RiMessage3Line/></a>
    </nav>
  )
}

export default Nav