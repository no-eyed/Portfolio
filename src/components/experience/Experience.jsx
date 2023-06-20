import React from 'react'
import './experience.css'
import {BsCheckLg} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I have</h5>
      <h2>Technical Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'></small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <BsCheckLg className='experience__details-icon'/>
              <div>
                <h4>EJS</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>Flask</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              {/* <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'></small>
                </div>
              </article> */}
            </div>
        </div>
        <div className='experience__ml'>
          <h3>Machine Learning</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>Numpy</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>Pandas</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>OpenCV</h4>
                  <small className='text-light'></small>
                </div>
              </article>
            </div>
        </div>
        <div className='experience__miscellaneous'>
          <h3>Miscellaneous</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
                <div>
                  <h4>Linux</h4>
                  <small className='text-light'></small>
                </div>
              </article>
              <article className='experience__details'>
                <BsCheckLg className='experience__details-icon'/>
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

export default Experience