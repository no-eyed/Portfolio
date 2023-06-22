import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FcAbout/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><AiOutlineBook/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><AiOutlineProject/></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><AiOutlineHeart/></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav