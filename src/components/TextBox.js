import React from 'react'
import '../styles/textbox.css'

function TextBox({title, text}) {
  return (
    <div className='textbox'>
        <div className='textboxTitle'>
            <h2>{title}</h2>
        </div>  
        <div className='textboxText'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TextBox
