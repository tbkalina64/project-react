import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import { GiAchievement } from 'react-icons/gi'
import './skills.scss'
import 'antd/dist/antd.css';




const Skills = () => {

  const [disabled, setDisabled] = useState(false);

  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container skills">
        <div className="skills__left">
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> HTML5</h4>
            <Slider defaultValue={95} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> CSS</h4>
            <Slider defaultValue={90} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> SASS / LESS</h4>
            <Slider defaultValue={90} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Flex / Grid / Bootstrap</h4>
            <Slider defaultValue={90} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> CMS / Wordpress / E-Commerce</h4>
            <Slider defaultValue={85} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Redmine / JIRA / Trello (Agile, Kanban)</h4>
            <Slider defaultValue={90} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> NPM / webpack / Gulp</h4>
            <Slider defaultValue={70} disabled={disabled} />
          </div>
          
        </div>
        <div className="skills__right">
        <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> JavaScript</h4>
            <Slider defaultValue={70} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> jQuery</h4>
            <Slider defaultValue={80} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Vue.js / React.js</h4>
            <Slider defaultValue={60} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Worked with various API</h4>
            <Slider defaultValue={80} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Node.js, AJAX and JSON </h4>
            <Slider defaultValue={30} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Figma / Photoshop</h4>
            <Slider defaultValue={70} disabled={disabled} />
          </div>
          <div className="skills__item">
            <h4 className='text-light'><GiAchievement className="colorWhite"/> Google Services (ADS, Analytics, ets)</h4>
            <Slider defaultValue={80} disabled={disabled} />
          </div>
        </div>
        <div className='skills__disabled'>Disabled: <Switch size="small" checked={disabled} onChange={onChange} /></div>
        

      </div>
    </section>
  )
}

export default Skills