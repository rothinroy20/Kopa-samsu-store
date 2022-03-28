import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const { img, id, name, price } = props.product || {};

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='gun-info'>
                <h4>Gun id: {id}</h4>
                <h3 className='Gun-name'>{name}</h3>
                <h4> Price: ${price}</h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;