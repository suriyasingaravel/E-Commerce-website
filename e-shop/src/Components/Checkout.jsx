import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "../Styles/Checkout.css"
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className='checkout'>
       
    <div className="checkout-left">

     <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
     alt="ad-img" className='checkout-ad' />
    <div>
        <h2 className="checkout-title">
            Your Shopping Cart
        </h2>
        <CheckoutProduct/>
    </div>

    </div>
    <div className="checkout-right">
        <Subtotal/>
    </div>
    
    </div>
  )
}

export default Checkout