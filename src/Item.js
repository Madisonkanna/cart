import React from "react";

const Item = props => {
  const addToCart = () => {
    console.log("clicked");
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
