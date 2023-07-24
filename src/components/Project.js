import React from 'react'
import '../styles/project.css'

function Project({imgURL, title, description}) {
  return (
    <div className='project'>
        <div className='projectImage'>
            <img src={imgURL} alt='img'/>
        </div>
        <div className='projectBody'>
            <h1 id='projectTitle'>{title}</h1>
            <p id='projectDescription'>{description}</p>
        </div>
    </div>
  )
}

export default Project
