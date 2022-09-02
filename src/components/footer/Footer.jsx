import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'


function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>CrimsonHerb</a>

      {/* <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebook/></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
      </div> */}

      <div className='footer__copyright'>
        <small>Thanks for checking it out!</small>
      </div>

    </footer>
  )
}

export default Footer