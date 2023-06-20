import React from 'react'
import {SiLeetcode} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
 
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://leetcode.com/user6180R/' target="_blank"><SiLeetcode /></a>
        <a href='https://www.linkedin.com/in/shobhit-arya-482819215/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/no-eyed' target='_blank'><AiFillGithub /></a>
    </div>
  )
}

export default HeaderSocials