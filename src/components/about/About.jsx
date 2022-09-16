import React from 'react'
import './about.scss'
import Foto from '../../assets/image/people.png'
import { FaLaptopCode } from 'react-icons/fa'
import { IoMdPeople } from 'react-icons/io'
import { CgWebsite } from 'react-icons/cg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Now</h5>
      <h2>About Me</h2>

      <div className="container about">
        <div className="about__foto">
          <img src={Foto} alt="foto" />
        </div>
        <div className="about__description">
          <div className="about__cards-wrap">
            <article className="about__card-item">
              <FaLaptopCode className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className="about__card-item">
              <CgWebsite className='about__icon' />
              <h5>Project</h5>
              <small> 90+ Completed</small>
            </article>
            <article className="about__card-item">
              <IoMdPeople className='about__icon' />
              <h5>Сustomers</h5>
              <small>150+ satisfied</small>
            </article>

          </div>
          <div className="about__paragraph">
            <p>I develop, maintain and update websites for clients of all sizes, specializing in creating stylish, modern websites, web services and online stores using popular CMS and frameworks. My passion is to create digital user interfaces with a vibrant interface and meaningful interactions. Check out my Portfolio</p>
            <a href='#contacts' className="btn btn-primary">Let's talk</a>
          </div>


        </div>

      </div>

    </section>
  )
}

export default About