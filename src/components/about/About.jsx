import React from 'react'
import './about.css'

// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/OctoIcon1.png'

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
            I developed a strong interest in web development when creating a thesis project for
            a research subject in 2014. This intereset was further ignited during a summer internship
            at a laboratory group in UPD-DCS. </p>
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