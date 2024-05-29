import React from 'react'
import './about.css'


import ME from '../../assets/Picture.jpg'

const About = () => {
  return (
    <section id="about">
      <div className='about-area' id='about-area'>
      <div className='about__container'>
        

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>

            <h2 className='header-title'>About Me</h2>

            <p>
            Hello! I'm Joma Villanueva.
            I'm currently a software developer for Invensity.
            Currently learning more about infrastructure and cloud in order to one day become a cloud engineer</p>
            <p>
            I  graduated with a bachelor's degree in Mechanical Engineering from University of the Philippines - Diliman in 2020 
            and passed the board examinations in 2021. I am currently looking for job opportunity that matches my interest.
            </p>

            <a href ='#contact' className='btn btn-primary'>Let's Talk</a> 

        </div>


      </div>

    </div>
    </section>
  )
}

export default About