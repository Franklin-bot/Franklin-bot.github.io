import React from 'react'
import '../styles/textbox2.css'

function Textbox2({title, text}) {
  return (
    <div className='textbox2'>
                <div className='textbox2Title'>
            <h2>{title}</h2>
        </div> 
        <div className='textbox2Text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Textbox2
