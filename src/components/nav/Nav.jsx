import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState, useEffect} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const sections = ['#home', '#about', '#skills', '#projects', '#contact'];
      const sectionOffsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeSection = '#home';
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          activeSection = sections[i];
          break;
        }
      }

      setActiveNav(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FcAbout/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active': ''}><AiOutlineBook/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><AiOutlineProject/></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><AiOutlineHeart/></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav