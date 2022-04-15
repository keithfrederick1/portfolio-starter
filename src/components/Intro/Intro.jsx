import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesemoji from '../../img/glassesimoji.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span> Hello! I am</span>
          <span>Keith Frederick</span>
          <span>Experienced Software Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and embedded systems. Experienced with the latest cutting edge development tools and procedures.  Able to effectively self-manage during independent projects, as well as contribute to a team</span>
        </div>

        <button className='button intro-button'>Hire Me</button>
        <div className="intro-icons">
          <a href='https://github.com/keithfrederick1'>
            <img src={Github} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/keith-frederick/'>
            <img src={LinkedIn} alt="" />
          </a>
          <a href=''>
            <img src={Instagram} alt="" />
          </a>
          
        </div>
      </div>
      <div className="intro-right">
       <img src={Vector1} />
       <img src={Vector2} />
       <img src={glassesemoji} />
       <div style={{top: '-4%', left: '68%'}}>
         <FloatingDiv image={Crown} txt1='Web' txt2="Developer"/>
       </div>
       <div style={{top: '18rem', left: '0rem' }}>
         <FloatingDiv image={thumbup} txt1='Graphic' txt2='Designer' /> 
       </div>
       {/* blur divs */}
       <div className="blur" style={{background: "rgb(47, 156, 215)"}}></div>
       <div className="blur" style={{
         background: "rgb(47, 156, 215)",
         top: '17rem',
         width:'21rem',
         height: '11rem',
         left: '-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
