import React from 'react'
import './footer.css'
const Footer = ({length}) => {
  return (
    <div className='footer'>
        <p>{length} List {length===1 ? "item": "items"}</p>
        <p>2022 Copyright@CedrickDevops</p>
        
    </div>
  )
}

export default Footer