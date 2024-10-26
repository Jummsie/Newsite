import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import eso from '../../assets/eso.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={eso} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatibus.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, voluptate?</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Acting</p><hr style={{width:"100%"}} /></div>
            <div className="about-skill"><p>Music</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Hosting</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>VoiceOver</p><hr style={{width:"50%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Number of Awards</p>
        </div>
      </div>
    </div>
  )
}

export default About
