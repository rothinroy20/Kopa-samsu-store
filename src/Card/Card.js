import React from 'react';
import "./Card.css";

const Card = ({ gunData }) => {
    const { name, img, bullet, capacity, action, price } = gunData;
    console.log(gunData);
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h1>{name}</h1>
            <p>bullet Type: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>
            <div className='add-to-cart'>
                <button>Add to Card</button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;