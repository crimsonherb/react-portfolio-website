import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Website',
    description: 'Created using React and EMAILJS API to enable contacting',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]



const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className='portfolio-area'>

    <div className='portfolio-title'>
        <h2 className='header-title'>Portfolio</h2>
    </div>


      <div className='portfolio__content'>

        {
          data.map(({id, image, title, description, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>

              <div className='portfolio__item-content'>

              <h3>{title}</h3>
              <p>{description}</p>

              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
              </div>

              </div>

              </article>
            )
          })
        }

      </div>

    </div>
    </section>
  )
}

export default Portfolio