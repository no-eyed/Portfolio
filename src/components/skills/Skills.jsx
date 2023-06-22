import React from 'react'
import './skills.css'
import {BsCheckLg} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h5> What Skills I have</h5>
      <h2>Technical Skills</h2>

      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <BsCheckLg className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckLg className='skills__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <BsCheckLg className='skills__details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'></small>
              </div>
            </article>
            {/* <article className='skills__details'>
              <BsCheckLg className='skills__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>skillsd</small>
              </div>
            </article> */}
            <article className='skills__details'>
              <BsCheckLg className='skills__details-icon'/>
              <div>
                <h4>EJS</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        <div className='skills__backend'>
          <h3>Backend Development</h3>
            <div className='skills__content'>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>Flask</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              {/* <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'></small>
                </div>
              </article> */}
            </div>
        </div>
        <div className='skills__ml'>
          <h3>Machine Learning</h3>
            <div className='skills__content'>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>Numpy</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>Pandas</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>OpenCV</h4>
                  <small className='text-light'></small>
                </div>
              </article>
            </div>
        </div>
        <div className='skills__miscellaneous'>
          <h3>Miscellaneous</h3>
            <div className='skills__content'>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>Linux</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='skills__details'>
                <BsCheckLg className='skills__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'></small>
                </div>
              </article>
            </div>
        </div>          
      </div>
    </section>
    

  )
}

export default Skills