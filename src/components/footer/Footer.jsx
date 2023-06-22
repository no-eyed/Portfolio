import React from 'react'
import './footer.css'
import {SiLeetcode} from 'react-icons/si'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Shobhit</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li><a href='#projects'>Projects</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://leetcode.com/user6180R/' target="_blank"><SiLeetcode/></a>
        <a href='https://twitter.com' target="_blank"><IoLogoTwitter/></a>
        <a href='https://instagram.com' target="_blank"><AiFillInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Shobhit Arya</small>
      </div>
    </footer>
  )
}

export default Footer