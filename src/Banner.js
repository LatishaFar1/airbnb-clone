import { Button } from '@mui/material'
import React, { useState } from 'react'
import Dates from './Dates';
import {useNavigate} from "react-router-dom";

import "./index.css"

function Banner() {

  const [showDates, setShowDates] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='banner'>

      <div className='banner__search'> 
        {showDates && <Dates />}
        <Button className="banner__searchButton" variant="outlined"
        onClick={() => setShowDates(!showDates)}> {showDates ? "Hide": "Search Available Dates" } 
        </Button>
      </div>

      <div className='banner__info'>
        <h1>Let's go on an adventure</h1>
        <h5>
            Get out of your comfort zone and discover something new.
        </h5>
        <Button variant="outlined" onClick={() => navigate("/search")}> Explore</Button>
      </div>
    </div>
  )
}

export default Banner