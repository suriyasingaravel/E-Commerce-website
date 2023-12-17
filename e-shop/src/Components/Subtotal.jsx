import React from 'react';
import "../Styles/Subtotal.css";

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

const Subtotal = () => {
  const subtotalValue = 0; // Replace this with your actual subtotal value

  return (
    <div className='subtotal'>
      <>
        <p>
          Subtotal (0 items): <strong>{formatCurrency(subtotalValue)}</strong>
        </p>
        <small className='subtotal-gift'>
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
    </div>
  );
};

export default Subtotal;
