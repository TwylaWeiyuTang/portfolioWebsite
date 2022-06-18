import React from 'react'
import './heroStyle.scss'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
        <motion.div 
        initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1, ease: 'easeInOut'}}
        className='top'>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1, ease: 'easeInOut', delay: 1}}
                data-scroll data-scroll-speed="2" className="title">Twyla</motion.h1>
                <motion.div className='text'>
                <motion.p 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 0.5, ease: 'easeInOut', delay: 3}}
                data-scroll data-scroll-speed="2" className='job-1'>UI/UX designer</motion.p>
                <motion.p 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 0.5, ease: 'easeInOut', delay: 3}}
                data-scroll data-scroll-speed="2" className='job-2'>Full-stack web developer</motion.p>
                <motion.p 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 0.5, ease: 'easeInOut', delay: 3}}
                data-scroll data-scroll-speed="2" className='job-3'>Graphic designer</motion.p>
                <motion.h1 
                initial={{opacity: 0}} 
                animate={{opacity: 1}} 
                transition={{duration: 1, ease: 'easeInOut', delay: 2}}
                data-scroll data-scroll-speed="2" className='title-1'>Tang</motion.h1>
                </motion.div>
        </motion.div>
  )
}

export default Hero