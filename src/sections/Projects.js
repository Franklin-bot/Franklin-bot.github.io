import React from 'react'
import Project from '../components/Project'
import attentio from '../assets/attentio.png'
import autoencoder from '../assets/autoencoder.png'
import sneakermodel from '../assets/sneakermodel.jpg'
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
        <Project imgURL={autoencoder} title="Autoencoder Image Compression" description= "Built convolutional autoencoder combined with PCA to compress image ML datasets to reduce need for disk batching and its subsequent speed bottlenecks while training models. Achieved ~1.5x compression ratio while maintaining 90.02% image quality" />
        <Project imgURL={sneakermodel} title="Image-based Sneaker Price Prediction" description="Developed a neural network to predict sneaker resell prices based on sneaker images, leveraging the direct correlation between design and price.
Created training dataset of 295,000 images by web-scraping StockX and achieved 99.8% prediction accuracy, with a 92% error decrease  compared to similar models utilizing tabular data.
Dockerized and deployed with Kubernetes as KubeFlow ML pipeline on AWS with EC2 and EKS, allowing for real-time resource optimization, drift monitoring, and automated continuous learning." />
      </div>
    </div>
  )
}

export default Projects
