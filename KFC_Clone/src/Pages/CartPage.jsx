import React, { useContext, useEffect, useState } from "react";
import CartCard from "../Component/CartCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./cartPage.css";
import { Button } from "@chakra-ui/react";
import { DataContext } from "../Context/DataContext";
const CartPage = () => {
  const [cart, setCart] = useState([]);
  let { price } = useContext(DataContext);
  async function getData() {
    let res = await fetch("http://localhost:3000/cart");
    let data = await res.json();
    setCart(data);
  }
  function totalPrice() {
    console.log("Price:", price);
  }
  useEffect(() => {
    getData();
  });
  return (
    <>
      <InfiniteScroll
        dataLength={cart.length}
        hasMore={true}
        style={{ overflowX: "hidden" }}
      >
        <div id="main-cart">
          <div id="sub-cart">
            {cart.map((item) => (
              <CartCard
                img={item.img}
                title={item.title}
                category={item.category}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
      <Button onClick={totalPrice}>Calculate</Button>
    </>
  );
};

export default CartPage;
