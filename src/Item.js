import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Item = props => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const item = { name: props.name, quantity: props.quantity };
    setCart(items => [...items]);
  };

  const { name, quantity } = props;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{quantity}</h2>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Item;
