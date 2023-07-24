import React from 'react'
import '../styles/footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <div className='footer'>
        <div id='initials'>
          <p>© Franklin Zhao 2023</p>
          <p>All Rights Reserved</p>
        </div>
        <div id = "links">
          <h2>Links </h2>
          <div id="linkIcons">
            <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/franklin-zhao-1230581b2/">< LinkedInIcon style={{ color: 'white' }}/></a>
            <a target="_blank" rel='noopener noreferrer' href="https://github.com/Franklin-bot" >< GitHubIcon style={{ color: 'white' }}/></a>
            <a target="_blank" rel='noopener noreferrer' href="https://github.com/Franklin-bot" >< InstagramIcon style={{ color: 'white' }}/></a>
          </div>
        </div>
        <div id = "contacts">
          <h2>Contact</h2>
          <p>franklinzhao2026@u.northwestern.edu</p>
          <p>fzhao03@gmail.com</p>
          <p>770 495 9186</p>
        </div>
      </div>
  )
}

export default Footer
