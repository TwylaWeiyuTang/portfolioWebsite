import React from 'react'
import './footerStyle.scss'

const Footer = () => {
  return (
    <div className='text-sec'>
                <h3 >You never know what is there waiting for you, until you take the initiative.</h3>
                <div>
                    <a href='/contact'>Contact</a>
                    <a href='mailto: twylaweiyutang@outlook.com'>twylaweiyutang@outlook.com</a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>linkedin</a>
                    <a href='https://www.linkedin.com/in/weiyu-tang-297116186/' target='_blank' rel='noreferrer'>instagram</a>
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