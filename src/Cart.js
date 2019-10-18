import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div>
      <span>Items in cart : {cart.length} </span>
      <span>total quantity: {cart.quantity}</span>
    </div>
  );
};

export default Cart;
