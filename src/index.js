import React, { Component } from "react";
import { render } from "react-dom";
import ItemsList from "./ItemsList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Cart />
        <ItemsList />
      </div>
    </CartProvider>
  );
};

render(<App />, document.getElementById("root"));
