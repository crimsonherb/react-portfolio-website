import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


function HeaderSocials() {
  return (
    <div className='header__socials'>

      <a href='https://linkedin.com/in/jma-villanueva/' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/crimsonherb?tab=repositories' target="_blank" rel="noopener noreferrer"><FaGithub /></a>

    </div>
  )
}

export default HeaderSocials