import React from 'react'
import "./intro.css"
import ravi from "../img/ravi.png"


const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
             <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello,My Name Is</h2>
            <h1 className='i-name'>Ravi A Pankhaniya</h1>

            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Data Analyst</div>
                    <div className="i-title-item">Software Engineer</div>
                    <div className="i-title-item">Data Scientist</div>
                    <div className="i-title-item">Full Stack Developer</div>
                </div>
            </div>

            <h3 className="i-desc">
            I am the Student of <span className='cs'>Computer Science</span> in <span className='ms'>The Maharaja Sayajirao University Of Baroda.</span>
            </h3>
        </div>

        
</div>
       
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={ravi} alt="" className="i-img" />
        </div>

    </div>
  )
}

export default Intro