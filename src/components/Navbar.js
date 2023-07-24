import React from 'react'
import '../styles/navbar.css'

function Navbar() {

  return (
    <div className='navbar'>
      <div className='navbarName'>
        <h1>Franklin Zhao</h1>
      </div>
      <div className='navbarLinks'>
        <p><a href ="#aboutMe">About</a></p>
        <p><a href ="#experience">Experience</a></p>
        <p><a href ="#projects">Projects</a></p>
      </div>
    </div>
  )
}

export default Navbar
