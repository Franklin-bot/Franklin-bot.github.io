import React from 'react'
import TextBox2 from '../components/Textbox2'
import '../styles/experience.css'


function experience() {
  return (
    <div className='experience' id='experience'>
        <div className='experienceHeader'>
            <h1>Experience</h1>
            </div>
        <div className='experienceBody'>
<<<<<<< HEAD
            <TextBox2 title="Software Engineering Intern @ Feinberg School of Medicine" text="Wrote OpenSim Python scripts to synthetically augment Inertial Measurement Unit datasets. Built and trained variational autoencoders to conduct inverse joint kinematics and generate missing sensor data." />
=======
            <TextBox2 title="Software Engineering Intern @ Feinberg School of Medicine" text="Wrote OpenSim Python scripts to synthetically augment Inertial Measurement Unit datasets. Through TensorFlow, built and trained neural networks with these datasets to conduct inverse joint kinematics." />
>>>>>>> cb7cfd7 (Configure React app for deployment to GitHub Pages)
            <TextBox2 title="Founder @ Brickering" text="Launched LEGO robotics education YouTube channel, accumulating 2.5k subscribers and 300,000+ views. Published tutorials teaching how to build and implement basic robotics mechanism and program design, such as gear trains and PID controllers" />
        </div>
    </div>
  )
}

export default experience
