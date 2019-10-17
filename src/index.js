import React, { Component } from "react";
import { render } from "react-dom";
import ItemsList from "./ItemsList";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <ItemsList />
    </div>
  );
};

render(<App />, document.getElementById("root"));
