import React from 'react'
import TextBox from '../components/TextBox'
import '../styles/about.css'

function About() {
  return (
    <div className='about' id='aboutMe'>
      <div className='aboutHeader'>
        <h1>More about me</h1>
      </div>
      <div className='aboutBody'>
        <TextBox title="Education" text="I'm a student at Northwestern University studying computer science, specializing in machine learning."/>
        <TextBox title="Technical Skills" text="Programming - Java, JS, Python, Swift, C, C++, CSS, MATLAB, Shell Script, ARM32 Assembly Technologies - React, Pandas, OpenSim, Docker, Kubernetes, Git/Github, TensorFlow"/>
<<<<<<< HEAD
        <TextBox title="Interests" text="I'm a huge Tottenham Hotspur fan and a Swiftie! In my free time, I play flute and build mechanical keyboards and computers."/>
=======
        <TextBox title="Interests" text="I'm a huge Tottenham Hotspur fan and a Swiftie! In my free time, I play flute and build mechanical keyboards and computers. Somehow, I also have a girlfriend."/>
>>>>>>> cb7cfd7 (Configure React app for deployment to GitHub Pages)
      </div>
    </div>
  )
}

export default About
