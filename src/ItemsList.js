import React from "react";
import Item from "./Item";

const ItemsList = () => {
  const items = [
    { name: "Item", quantity: 1, id: 1 },
    { name: "Item", quantity: 1, id: 2 },
    { name: "Item", quantity: 1, id: 3 },
    { name: "Item", quantity: 1, id: 4 },
    { name: "Item", quantity: 1, id: 5 },
    { name: "Item", quantity: 1, id: 6 },
    { name: "Item", quantity: 1, id: 7 },
    { name: "Item", quantity: 1, id: 8 },
    { name: "Item", quantity: 1, id: 9 },
    { name: "Item", quantity: 1, id: 10 },
    { name: "Item", quantity: 1, id: 11 },
    { name: "Item", quantity: 1, id: 12 },
    { name: "Item", quantity: 1, id: 13 },
    { name: "Item", quantity: 1, id: 14 },
    { name: "Item", quantity: 1, id: 15 },
    { name: "Item", quantity: 1, id: 16 },
    { name: "Item", quantity: 1, id: 17 },
    { name: "Item", quantity: 1, id: 18 },
    { name: "Item", quantity: 1, id: 19 },
    { name: "Item", quantity: 1, id: 20 }
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
