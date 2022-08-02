import React from 'react'
import './footerStyle.scss'

const Footer = () => {
  return (
    <div className='text-sec' >
                <h3>You never know what is there waiting for you, until you take the initiative.</h3>
                <div>
                    <a href='/contact'>Contact form
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                    <a href='mailto: twylaweiyutang@outlook.com'>twylaweiyutang@outlook.com
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4", width: "380px"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>linkedin
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                    <a href='https://www.instagram.com/twyla_weiyu_tang/' target='_blank' rel='noreferrer'>instagram
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' style={{enableBackground: "new 0 0 152.9 43.4"}}>
                        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/>
                      </svg>
                    </a>
                </div>
                <div className='footer-bottom'>
                    <span
                    data-scroll data-scroll-speed='2' data-scroll-direction="horizontal"
                    >&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                    <span
                    data-scroll data-scroll-speed='-2' data-scroll-direction="horizontal"
                    >Made with &hearts; by me
                </span>
                </div>
    </div>
  )
}

export default Footer