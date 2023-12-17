import React from 'react';
import "../Styles/Product.css";

const Product = ({id,title,price,rating,image}) => {
  return (

        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className='product-price'> 
                    <small>$</small>
                    <strong>{price}</strong>
               </p>
                <div className="product-rating"> 
                 {Array(rating).fill().map((_,i)=>
                   <p key={i}> ⭐ </p>
                 )}
                
                </div>
            </div>
            <img src={image} alt="product-img" />

            <button>Add to Cart</button>
        </div>

  )
}

export default Product