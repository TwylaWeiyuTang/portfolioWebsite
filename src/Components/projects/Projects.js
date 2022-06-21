import React from 'react'
import GraphicDesign from './graphic-design/GraphicDesign'
import './projectsStyle.scss'
import WebDevelopment from './web-dev/WebDevelopment'

const Projects = () => {
  return (
    <div className='projects'>
        <h3>Projects</h3>
        <WebDevelopment />
        <GraphicDesign />
    </div>
  )
}

export default Projects