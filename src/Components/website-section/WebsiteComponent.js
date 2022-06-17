import React from 'react'
import './websiteComponentStyle.scss'
import { Card } from 'react-bootstrap'

const WebsiteComponent = () => {
  return (
    <div className='xs-12 website-component text-center' >
        <div className='empire'>
          <a href='/work-empire-clinic-website'>
              <h5>Empire Clinic</h5>
              <p>Roles: Design, Website Development</p>
          </a>
        </div>

        <div className='sushiba'>
          <a href='/sushiba-recommendation-system-demo-website'>
              <h5>Sushiba Recommendation System Demo</h5>
              <p>Roles: Design, Full Stack Development, Cloud Engnieer</p>
          </a>
        </div>
    </div>
  )
}

export default WebsiteComponent