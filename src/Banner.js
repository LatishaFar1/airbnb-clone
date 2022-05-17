import { Button } from '@mui/material'
import React from 'react'
import "./index.css"

function Banner() {
  return (
    <div className='banner'>
      <div className='banner__info'>
        <h1>Let's go on an adventure</h1>
        <h5>
            Get out of your comfort zone and discover something new.
        </h5>
        <Button variant="outlined"> Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner