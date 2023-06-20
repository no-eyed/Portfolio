import React from 'react'
import './about.css'
import ME from '../../assets/Me.png'
import {BsAward} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {AiOutlineProject} from 'react-icons/ai'


export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Iamge" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Some years Working</small>
            </article>

            <article className="about__card">
              <SiLeetcode className="about__icon"/>
              <h5>LeetCode</h5>
              <small>Among Top 17.24% in LeetCode Contests</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>
          <p>I'm a passionate coding enthusiast who thrives on the challenges of problem-solving and project development. My expertise lies in utilizing technologies like Django, Python, Node.js, and React.js to build robust and efficient web applications. I find joy in exploring the possibilities of Python, leveraging it for tasks such as machine learning projects.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
