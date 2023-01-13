import React from 'react'
import IMG1 from '../../assets/Recipe_webapp.jpg'
import IMG2 from '../../assets/Todolist.jpg'
import IMG3 from '../../assets/Portfolio3.jpg'
import IMG4 from '../../assets/DonationPage.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'Todo List',
    description: 'To do list created using django rest framework and ReactJS',
    github: 'https://github.com/crimsonherb/todo-list-django-react',
    demo: null
  },
  {
    id: 4,
    image: IMG4,
    title: 'Buy me a drink',
    description: 'A donation page developed using Stripe API to process payments and Django for the backend',
    github: 'https://github.com/crimsonherb/django-stripe-donation/tree/master',
    demo: null
  },
  {
    id: 2,
    image: IMG1,
    title: 'Recipe Webapp',
    description: 'A recipe app created using django and PostgreSQL, has login features and create, read, update elements',
    github: 'https://github.com/crimsonherb/django-project-1',
    demo: null
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio Website',
    description: 'Website to showcase projects. Created using React and EMAILJS API to enable contacting option',
    github: 'https://github.com/crimsonherb/react-portfolio-website',
    demo: 'https://crimsonherb.vercel.app'
  },

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
                {demo !== null ? (
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                ):(null)}


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