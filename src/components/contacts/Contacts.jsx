import React, {useRef} from 'react'
import './contacts.css'
import {MdEmail} from 'react-icons/md'
import {GrLinkedin} from 'react-icons/gr'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_78l18cj', 'template_1p8468d', form.current, 'SQfM5H6r2xcweUDY7');

    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail/>
            <h4>Email</h4>
            <h5>shobhitarya2002@gmail.com</h5>
            <a href="mailto:shobhitarya@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <GrLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Shobhit Arya</h5>
            <a href="https://www.linkedin.com/in/shobhit-arya-482819215/" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts