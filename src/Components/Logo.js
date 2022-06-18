import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`

    width: 100%;
    color: ${props=> props.theme.text};
    z-index: 5;

    a{
        display: flex;
        align-items: flex-end;
    }

    svg {
        width: 3.5rem;
        height: auto;
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g {
            path{
                stroke: ${props => props.theme.text};
            }
        }
    }
`
const Logo = () => {
  return (
    <Container>
        <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path  initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 1,
                ease: 'easeInOut'
            }}
            d="M56.8303 50.1699H49.8303L49.8303 3.50044C49.8303 1.56744 51.3973 0.000431061 53.3303 0.000431061V0.000431061C55.2633 0.000431061 56.8303 1.56743 56.8303 3.50043L56.8303 50.1699Z" fill="white"/>
            <motion.path  initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 1,
                delay: 1,
                ease: 'easeInOut'
            }}
            d="M77.1694 53.1611C77.1694 55.0941 75.6024 56.6611 73.6694 56.6611L26.9999 56.6611V49.6611L73.6694 49.6611C75.6024 49.6611 77.1694 51.2281 77.1694 53.1611V53.1611Z" fill="white"/>
            <motion.path  initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 1,
                delay: 2,
                ease: 'easeInOut'
            }}
            d="M21 27H28V73.6695C28 75.6025 26.433 77.1695 24.5 77.1695V77.1695C22.567 77.1695 21 75.6025 21 73.6695V27Z" fill="white"/>
            <motion.path  initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 1,
                delay: 3,
                ease: 'easeInOut'
            }}
            d="M0 23.8389C0 21.9059 1.567 20.3389 3.5 20.3389H50.1695V27.3389H3.5C1.56701 27.3389 0 25.7719 0 23.8389V23.8389Z" fill="white"/>
        </svg>

        {/* <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="none">
            <g></g>
            <g><motion.path initial={{
                opacity: 0,
                pathLength: 0
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                duration: 2,
                ease: 'easeInOut'
            }}
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
            <Text initial={{
                opacity: 0,
                x: -50
            }}
            animate={{
                opacity: 1,
                x: -5
            }}
            transition={{
                duration: 2,
                delay: 2,
                ease: 'easeInOut'
            }}
            >
                Wibe Studio
            </Text> */}
    </Container>
  )
}

export default Logo