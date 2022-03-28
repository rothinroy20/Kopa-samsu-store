import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shope.css'


const Shope = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div className='shope-container'>
            <div className="product-container">
                {
                    products?.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shope;