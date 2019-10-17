import React from "react";
import Item from "./Item";

const ItemsList = () => {
  const items = [
    { name: "Item", quantity: 1, id: 1 },
    { name: "Item", quantity: 1, id: 2 },
    { name: "Item", quantity: 1, id: 3 }
  ];

  return (
    <div>
      {items.map(item => (
        <Item name={item.name} quantity={item.quantity} key={item.id} />
      ))}
    </div>
  );
};

export default ItemsList;
