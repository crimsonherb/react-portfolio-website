import React from 'react'

import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import IMG1 from '../../assets/img-1.jpg'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        
        <div className='header__content'>

        

          <h2>Hello I'm</h2>
          <h1>Joma Villanueva</h1>
          <h2>Full Stack Developer</h2>

          <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, 
          elit neque felis malesuada sapien, 
          massa ridiculus viverra tempor pulvinar. 
          Ad lacus pellentesque netus blandit class molestie feugiat, 
          sodales dictum habitant dui integer.
          </p>

          <CTA />

        </div>

        <div className='header__me'>
          <div className='header__me-image'>
            <img src={IMG1} alt='' />
          </div>
        </div>

        {/* <HeaderSocials /> */}

      </div>
    </header>
  )
}

export default Header