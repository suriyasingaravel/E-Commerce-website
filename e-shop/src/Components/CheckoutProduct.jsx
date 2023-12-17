import React from 'react';
import "../Styles/CheckoutProduct.css"

const CheckoutProduct = () => {
  return (
      <div className="checkout-product">
         <img src="https://m.media-amazon.com/images/I/716fAVud8PL._SX679_.jpg" 
         alt="product-img" className='checkout-productImg' />
         <div className='checkout-productInfo'>
            <p className="checkout-productTitle">
            Apple iPhone 13 (128GB) - (Product) RED​​​​
            </p>
            <p className='checkout-productPrice'>
              <small>$</small>
              <strong>250</strong>
            </p>
            <div className="checkout-productRating">
             ⭐⭐⭐⭐
            </div>
            <button>Remove from Cart</button>
         </div>
      </div>
  )
}

export default CheckoutProduct