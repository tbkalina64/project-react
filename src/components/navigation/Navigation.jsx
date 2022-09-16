import React from 'react'
import './navigation.scss'
import { HiOutlineHome } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import { MdHomeRepairService } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { TiContacts } from 'react-icons/ti'
import { useState } from 'react'

const Navigation = () => {

  const [activeNaw, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNaw === '#' ? 'active' : ''}><HiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNaw === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNaw === '#services' ? 'active' : ''}><MdHomeRepairService /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNaw === '#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNaw === '#contacts' ? 'active' : ''}><TiContacts /></a>

    </nav>
  )
}

export default Navigation