import React, { useState } from 'react'
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavbar = () => {
      setOpenLinks(!openLinks)
  }

  return (
    <div className='navbar' >
      <div className='navbarName'>
        <h1 id='fullName'>Franklin Zhao</h1>
        <h1 id='initials'>FZ</h1>
      </div>
      <div className='navbarLinks' id={openLinks ? "open" : "close"}>
        <p><a href ="#aboutMe">About</a></p>
        <p><a href ="#experience">Experience</a></p>
        <p><a href ="#projects">Projects</a></p>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
