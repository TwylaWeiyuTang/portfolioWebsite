import React, {useRef, useState, useEffect} from 'react'
import emailjs from '@emailjs/browser';
import gsap from 'gsap';

import './contactPageStyle.scss'

const ContactPage = () => {
  // for textarea auto expansion
  let textareaRef = useRef(null)

  const onChange = () => {
    textareaRef.current.style.height = "";
    textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 300) + "px";
  };

  const [status, setStatus] = useState("Send");

  let form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm('twylatang_portfolio_win', 'template_vf341zk', form.current, 'HPCGaya5bK0NHaQq6')
    .then((result) => {
        console.log(result.text);
        setStatus("Sent!");
        form.current.reset();
        setStatus("Send")
    }, (error) => {
        console.log(error.text);
    });
};

  let titleRef = useRef(null)
  let headlineTL = new gsap.timeline()

  useEffect(() => {

    const headlineFirst = titleRef.children[0].children[0]
    const headlineSecond = titleRef.children[0].children[1]

    headlineTL.from([headlineFirst.children, headlineSecond.children], {
      duration: 1.5,
      y: "11rem",
      ease: "power3.easeOut",
      stagger: {
        each: .15
      }
    });
  }, [headlineTL])

  return (
    <div className='contact'>
      <div className='boxes-container'>
        <div className='bottom'></div>
        <div className='middle'></div>
        <div className='top-boxes'></div>
      </div>
      <div className='text-container' ref={el => titleRef = el}>
        <h1 data-scroll data-scroll-speed="2">
          <div className='line-container'>
            <div className='line-container-inner'>GET IN</div>
          </div>

          <div className='line-container'>
            <div className='line-container-inner'>TOUCH</div>
          </div>
        </h1>
      </div>
      <div className='contact-form'>
        <form ref={form} onSubmit={handleSubmit} >
          <input type='text' id='name' name='name' placeholder='Name' required></input>
          <input type='text' id='email' name='email' placeholder='Email' required></input>
          <textarea id='message' name='message' placeholder='Message' ref={textareaRef} onChange={onChange} required></textarea>

          <button type='submit'><span>{status}</span></button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage