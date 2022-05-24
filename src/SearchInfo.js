import React, { useState } from 'react'
import "./index.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SearchInfo({title, img, desc, location, price}) {

    const [heart, setHeart] = useState(false);


  return (
<div className='search__card'>
        <img src={img} alt="rental"/>
    <div className='search__info'>
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>{location}</h3>
        
    </div>
        <div className='search__info2'>
        
        <h5>{price}</h5>
        </div>

        <button className='heart__button'>
        <FavoriteBorderIcon onClick={() => {setHeart(true)}} style={{color: heart === true? "red" : ""}}/>
        </button>

  </div>
  )
}

export default SearchInfo