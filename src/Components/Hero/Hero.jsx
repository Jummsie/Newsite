import React from 'react'
import './Hero.css'
import eso from '../../assets/eso.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={eso} alt="" />
      <h1><span>I'm Eso Dike,</span> An actor, lawyer and musician.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cumque?</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
      
    </div>
  )
}

export default Hero
 