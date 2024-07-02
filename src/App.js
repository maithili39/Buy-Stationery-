import { useState, useEffect } from "react";
import "./App.css";
import React from 'react';

import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const stationary = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (stationary) => {
    const exist = cartItems.find((x) => x.id === stationary.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === stationary.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...stationary, quantity: 1 }]);
    }
  };

  const onRemove = (stationary) => {
    const exist = cartItems.find((x) => x.id === stationary.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== stationary.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === stationary.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Order Stationery  </h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {stationary.map((stationary) => {
          return (
            <Card stationary={stationary} key={stationary.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
