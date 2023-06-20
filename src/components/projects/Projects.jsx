import React from 'react'
import './projects.css'
import Frontend1 from '../../assets/portfolio.png'
import Frontend2 from '../../assets/weatherapp.png'
import Frontend3 from '../../assets/jobquesto.PNG'
import FullStack1 from '../../assets/icodeyoucode.PNG'
import FullStack2 from '../../assets/chatapp.png'
import AI1 from '../../assets/firedetector.jpg'

const FrontendProjcts = [
  {
    id: 1,
    image: Frontend1,
    title: 'Portfolio',
    github: 'https://github.com/no-eyed/Portfolio',
    demo: '#'
  },
  {
    id: 2,
    image: Frontend2,
    title: 'Weather App',
    github: 'https://github.com/no-eyed/Weather-App',
    demo: 'https://dribble.com/'
  },
  {
    id: 3,
    image: Frontend3,
    title: 'Job Questo',
    github: 'https://github.com/no-eyed/JobQuesto-Frontend',
    demo: 'https://joboquesto.netlify.app/'
  }
]

const FullstackProjects = [
  {
    id: 1,
    image: FullStack1,
    title: 'I Code, You Code',
    github: 'https://github.com/no-eyed/I-Code-You-Code-Fullstack',
    demo: 'https://icodeyoucode-fullstack.onrender.com'
  },
  {
    id: 2,
    image: FullStack2,
    title: 'Chat App',
    github: 'https://github.com/no-eyed/Chat-App',
    demo: 'https://dribble.com/shots/16673715-crypto-currency-dashboard-financial-visualization'
  }
]

const AIProjects = [
  {
    id: 1,
    image: AI1,
    title: 'Fire Detector',
    github: 'https://github.com/no-eyed/DevOpsOnFire',
    demo: ''
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>My recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <div className='projects__frontend'>
          {
            FrontendProjcts.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt=""></img>
                </div>
                <h3>{title}</h3>
                <div className='projects__item-cta'>
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
              )
            })
          }
        </div>
        <div className='projects__fullstack'>
          {
            FullstackProjects.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt=""></img>
                </div>
                <h3>{title}</h3>
                <div className='projects__item-cta'>
                  <a href={github} className='btn' target="_blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
              )
            })
          }
        </div>
        <div className='projects__ai'>
          {
          AIProjects.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='projects__item'>
              <div className='projects__item-image'>
                <img src={image} alt=""></img>
              </div>
              <h3>{title}</h3>
              <div className='projects__item-cta'>
                <a href={github} className='btn' target="_blank">GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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

export default Projects