import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 80vw;
    display: flex;

    margin: 0 auto;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const BannerComponent = styled.h1`
    white-space: nowrap;
    text-transform: uppercase;
    line-height: 1;
    /* :nth-child(1) {
        transform: translateX(10vw) rotate(16deg);
    }

    :nth-child(2) {
        transform: translateX(-10vw) rotate(-16deg);
    }

    :nth-child(3) {
        transform: translateX(0vw) rotate(6deg);
    }

    :nth-child(4) {
        transform: translateX(-15vw) rotate(-6deg);
    } */

    span{
        display: block;
        padding: 0.5rem 2rem;
        background-color: #32746C;
        color: #F58840;
        font-family: 'Library 3 am';
        font-size: 5rem;

        :nth-child(1){
            rotate: -90;
        }
    }
`


const Banner = () => {
  return (
    <Section>
        <Container id='up'>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed='8' 
                data-scroll-target="#up">Creating the unique and</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed='-6' 
                data-scroll-target="#up">user-friendly design</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed='6' 
                data-scroll-target="#up">Devleoping the robust and</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed='-4' 
                data-scroll-target="#up">well-performed website</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll 
                data-scroll-direction="horizontal" 
                data-scroll-speed='6' 
                data-scroll-target="#up">See some of my selected works</span>
            </BannerComponent>
        </Container>
    </Section>
  )
}

export default Banner