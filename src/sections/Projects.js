import React from 'react'
import Project from '../components/Project'
import attentio from '../assets/attentio.png'
import kubernetes from '../assets/kubernetes.png'
import '../styles/projects.css'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projectsHeader'>
        <h1 id='title'> Projects </h1>
        <a target='_blank'
            rel='noopener noreferrer' href="https://github.com/Franklin-bot" id='githubLink'>github.com/Franklin-bot</a>
      </div>
      <div className='projectsBody'>
        <Project imgURL={attentio} title="Attentio" description="IOS mobile app that employs gamification to enhance productivity by enabling users to engage in
        friendly competition with their peers to achieve the highest productivity. Coded in Swift, released to the App Store August 2021." />
        <Project imgURL={kubernetes} title="Image-based Sneaker Price Prediction" description="Machine learning dataset database managed by Kubernetes to ensure scaling and fault tolerance." />
      </div>
    </div>
  )
}

export default Projects
