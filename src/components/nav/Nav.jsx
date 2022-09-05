import React from 'react'
import { Link } from 'react-scroll'

import './nav.css'

import {RiHome2Line, RiUserLine, RiFolderOpenLine, RiMessage3Line} from 'react-icons/ri'


const Nav = () => {

  return (
    <nav>

      <Link to='intro-area' activeClass="active" spy={true} >
      <RiHome2Line/>
      </Link>

      <Link to='about-area' activeClass="active" spy={true}>
      <RiUserLine/>
      </Link>

      <Link to='portfolio-area' activeClass="active" spy={true}>
      <RiFolderOpenLine/>
      </Link>

      <Link to='contact-area' activeClass="active" spy={true}>
      <RiMessage3Line/>
      </Link>

    </nav>
  )
}

export default Nav