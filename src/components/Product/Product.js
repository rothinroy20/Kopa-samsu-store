import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { img } = props.product || {};
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;