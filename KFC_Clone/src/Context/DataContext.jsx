import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(0);
  async function getData() {
    let res = await fetch("http://localhost:3000/cart");
    let data = await res.json();
    setCounter(data.length);
    setCart(data);
  }
  function incCounter() {
    setCounter(counter + 1);
  }

  function decCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  function assignPrice() {
    let sum = 0;
    cart.map((e) => {
      sum = sum + e.price;
    });
    setPrice(sum);
  }
  function incPrice(x) {
    setPrice(price + x);
  }

  function decPrice(x) {
    setPrice(price - x);
  }

  useEffect(() => {
    getData();
  });
  return (
    <DataContext.Provider
      value={{
        counter,
        incCounter,
        decCounter,
        price,
        decPrice,
        incPrice,
        assignPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
