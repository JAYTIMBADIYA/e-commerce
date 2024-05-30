import React, { useState } from "react";
import ViewOffer from "../../AllOffer/ViewOffer/ViewOffer";
import Cartpro from "../Cartpro/Cartpro";


const MainComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove item from cart
  const removeItemFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <ViewOffer onAddToCart={addItemToCart} />
      {cartItems.length > 0 && <Cartpro cartItems={cartItems} onRemoveFromCart={removeItemFromCart} />}
    </div>
  );
};

export default MainComponent;

