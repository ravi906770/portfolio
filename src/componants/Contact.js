import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef = useRef();

  const [done,setDone] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_it19icn', 'template_mmp6cef', formRef.current, 'lO-XHQvi4M5UfiEU4')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
return (
   
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss With Me</h1>
          <div className="c-info">
            <div className="c-ingo-item">
            <i className="fa fa-phone"><h3>+91 8849129947</h3></i><br />
            <i className="fa fa-envelope"><h3>pankhaniyaravi05@gmail.com</h3></i>
            <i className="fa fa-map-marker"><h3>The Maharaja Sayajirao University Of Baroda,Vadodara,Gujarat,390002</h3></i>
            </div>
          </div>
        </div>
        <div className="c-right">
        <p className="c-desc"><span>What's Your Story?? </span><br />Get in touch.. I am always avaiable for developing the websites if the new projects comes along me..</p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="user_name" id="tx" placeholder='Enter Your Name' />
          <input type="email" name="user_email" id="tx" placeholder='Enter Your Email' />
          <input type="text" name="user_subject" id="tx" placeholder='Enter Subject Here' />
          <input type="text" name="user_contact" id="tx" placeholder='Enter Your Contact Here' /><br />
          <button>Submit</button>
        </form>
        {done && <h1 className='h'>Thank You!  I will Contact You Shortly....</h1>}
        </div>
      </div>

    </div>
  )
}

export default Contact