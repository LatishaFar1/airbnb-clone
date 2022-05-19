import React from 'react'
import "./index.css"

function Card({title, img, desc, price}) {
  return (
    <div className='card'>
        <img src={img} alt="img of home"/>

        <div className='card__info'>
            <h2>{title}</h2>
            <h3>{desc}</h3>
            <h4>{price}</h4>
        </div>

    </div>
  )
}

export default Card