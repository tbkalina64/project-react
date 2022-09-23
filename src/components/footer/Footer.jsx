import React from 'react'
import './footer.scss'
import logo from'../../assets/image/logo.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <a className='footer__logo' href="#"><img src={logo} alt="logo" /> </a>
        <ul className='footer__menu'>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">My Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">My Contacts</a></li>
        </ul>
        <ul className='footer__social'>
          <li><a href="https://instagram.com" target='_blank'><AiOutlineInstagram /></a></li>
          <li><a href="https://www.facebook.com" target='_blank'><FiFacebook /></a></li>
          <li><a href='https://www.linkedin.com/' target='_blank'><FiLinkedin /></a></li>
        </ul>
        
      </div>
      <div className="footer__copyright">
          <small>&copy; Tetiana Loskutova 2022. All rights reserved. </small>
        </div>
    </footer>
  )
}

export default Footer