import React from 'react'
import "./index.css";
import { Button } from '@mui/material';

function Search() {
  return (
    <div className='search'>
       <div className='search__info'>
            <h1>
                Local Stays
            </h1>
                <Button variant="outlined">Cancellation</Button>

                <Button variant="outlined">Rooms</Button>

                <Button variant="outlined">Price</Button>

                <Button variant="outlined">More Filters</Button>
       </div>



    </div>
  )
}

export default Search