import React from 'react'
import "./About.css"
import ravi from "../img/Ravi.jpg"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
        {/* <h1>this is left</h1> */}
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={ravi} alt="" className="a-img" />
        </div>
        </div>
        <div className="a-right">
{/* <h1>this is right</h1> */}
<h1 className='a-title'>About Me</h1>
<p className="a-sub">I am Honest and Dedicated Person. My Short Term Goal is To Get Job In Reputed Company and Whenever I Improve My Skill  And Knowledge I want To Get Good Position In Software Development Field.</p>
<p className="a-desc">A Software Engineer is an IT professional who designs, develops and maintains computer software at a company.As a Software Engineer I use my creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization.</p>

        </div>
    </div>
  )
}

export default About