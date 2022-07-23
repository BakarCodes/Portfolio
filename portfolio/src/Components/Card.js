import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="Card">
        <div className="card__body">
            <img src={props.img} alt='Product'class="card__image"></img>
            <h2 className='card__title'>
                {props.title}
            </h2>
            <p className='card__description'>
                {props.description}
            </p>
        </div>
        <button className='card__btn'>
            Leave Review
        </button>
    </div>
  )
}

export default Card