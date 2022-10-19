import React from 'react'
import "./Skills.css"
import ravi from "./../img/cv.jpg"

const Skills = () => {
  return (
    <div className='s'>
      <div className="s-left">
        <h1 className='r'>Resume</h1>
        <div className="i">
          <img src={ravi} alt="" className="i-img2" />
        </div>

      </div>
      <div className="s-right">
        <h1 className='p'> Projects</h1>
        <div className="container t">
          <h3 className='rt'>1.React-TextUtils</h3>
          <p className='ds'><span id='us'>Use of This Responsive Website</span>:
            You can Do many operations on your text like convert to Uppercase, Convert Lowercase,Clear Text and Remove Your Extra space between Text,Copy Your Text etc.... also You can do Dark mode , Light Mode your Webpage on Laptop... Also See On Mobile...</p><br />
          {/* <i class="fa fa-external-link"></i> */}
          <h3>Tap here to View</h3><a href="https://ravi906770.github.io/TextUtils/" rel="noreferrer" className='li' target="_blank">TextUtils</a>

        </div>
        <div className="container t">
          <h3 className='rt'>2.Real Time Weather App</h3>
          <p className='ds'><span id='us'>Use of This Responsive Website</span>:
            You Can check the real time Weather and Temperature of Your city and It will give you the Whole World Temp.. Details and It is fully Responsive website ....
          </p><br />

          <h3>Tap here to View</h3><a href="https://weather-app-ravi906770.herokuapp.com/" rel="noreferrer" className='li' target="_blank">weather-app-ravi906770</a>

        </div>
        <div className="container t">
          <h3 className='rt'>3.Netflix Clone</h3>
          <p className='ds'><span id='us'>Use of This Responsive Website</span>:
            You Can view the latest Movies,Series and Different Populer TV shows and Much more....
            You can Login,Logout and it is looks like a real Netflix App...
          </p><br />

          <h3>Tap here to View</h3><a href="/" rel="noreferrer" className='li' >On Progress</a>

        </div>

      </div>
    </div>
  )
}

export default Skills