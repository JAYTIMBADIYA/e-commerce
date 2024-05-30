import React, { useState } from 'react'
import ViewOffer from './AllOffer/ViewOffer/ViewOffer';
import Cartpro from './Mycart/Cartpro/Cartpro';

const OfferCartManager = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
    const removeFromCart = (index) => {
      setCartItems(cartItems.filter((_, i) => i !== index));
    };

  return (
    <div>
        <ViewOffer addToCart={addToCart} />
        <Cartpro cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  )
}

export default OfferCartManager
