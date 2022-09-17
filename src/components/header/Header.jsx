import React from 'react'
import './header.scss'
import CV from '../../assets/image/CV.docx'
import Foto from '../../assets/image/people.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">

          <div className='header__left'>
            <h5 className='text-light'>Hello I'm</h5>
            <h1>Tatiana</h1>
            <h5 className='text-light'>Front End Developer</h5>
            <div className='header__link'>
              <a className='btn' href={CV} download>DownLoad Resume</a>
              <a className='btn btn-primary' href='#contact'>Let's Talk </a>
            </div>
          </div>
          <div className="header__right">
            <img src={Foto} alt='foto' />
          </div>
        </div>
        <HeaderSocials />
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header