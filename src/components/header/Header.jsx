import React from 'react'

import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import IMG1 from '../../assets/Octopus.png'

function Header() {
  return (
    <div className='intro-area' id='intro-area'>

      <HeaderSocials />

      <div className='container'>
        
        <div className='intro'>

        

          <h2>Hello! I'm</h2>
          <h1>Joma Villanueva</h1>
          <h2>Full Stack Developer</h2>

          <p>
          Mechanical Engineering graduate from UP-Diliman
          </p>

          <CTA />

        </div>

        <div className='header__me'>
          <div className='header__me-image'>
            <img src={IMG1} alt='' />
          </div>
        </div> 

        

      </div>
  </div>
  )
}

export default Header