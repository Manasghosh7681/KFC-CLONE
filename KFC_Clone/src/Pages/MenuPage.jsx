import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Component/Sidebar";
import "./menu.css";
import { Text } from "@chakra-ui/react";
import Card1 from "../Component/Card1";
import CardType2 from "../Component/CardType2";
import GoToTop from "../Component/GoToTop";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link as RouteLink } from "react-router-dom";

const MenuPage = () => {
  const [data, setData] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:3000/category");
    let data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="mainmenu">
      
        <div
          id="subHome"
          style={{
            width: "98vw",
            height: "68px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "1200px",
          }}
        >
          <div id="text" style={{ color: "white", marginRight: "1%" }}>
            LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
          </div>
          <div id="button-home">
            <RouteLink to="/cart">
            <button
              style={{
                color: "white",
                backgroundColor: "red",
                height: "47px",
                width: "185px",
                borderRadius: "1.4rem",
                textAlign: "center",
              }}
            >
              Start Order
            </button>
            </RouteLink>
          </div>
        </div>

        <div id="sidebar-content" style={{ background: "white"} }>
          <Sidebar />
          <InfiniteScroll dataLength={4} hasMore={true}  style={{overflowX:"hidden"}}>
          <div id="contentDiv" style={{width:"60vw"}}>
            <div
              className="content"
              id="one"
              style={{ backgroundColor: " #fff", width:"60vw" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>INTERNATIONAL BURGER FEST</Text>
              </div>
              <Card1 />
            </div>
            <div
              className="content"
              id="two"
              style={{ backgroundColor: " #fff",width:"67vw" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>MATCH DAY COMBO</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="three"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>VALUE LUNCH SPECIALS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="four"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>BOX MEALS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="five"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>BURGERS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="six"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>CHICKEN BUCKETS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="seven"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>RICE BOWLZ</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="eight"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>VALUE SNACKERS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="nine"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>CHICKEN ROLLS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="ten"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>SNACKS</Text>
              </div>
              <CardType2 />
            </div>
            <div
              className="content"
              id="eleven"
              style={{ backgroundColor: " #fff" }}
            >
              <div
                className="tabhead"
                style={{
                  margin: "1rem 3rem",
                  fontSize: "1.6rem",
                  color: "black",
                  fontFamily: "Impact, fantasy",
                }}
              >
                <Text>BEVERAGES</Text>
              </div>
              <CardType2 />
            </div>
          </div>
            </InfiniteScroll>
        </div>
      <GoToTop />
    </div>
  );
};

export default MenuPage;
