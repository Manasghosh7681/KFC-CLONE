import { AbsoluteCenter, border, Box, Divider, Text } from "@chakra-ui/react";
import Carousel from "../Component/Carousel";
import { Link as RouteLink } from "react-router-dom";



const HomePage = () => {
  return (
    <div id="mainHome">
      <div
        id="subHome"
        style={{
          width: "100vw",
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
      <div
        id="bannerDiv"
        style={{ border: "1px solid black", width: "100vw", height: "25rem" }}
      >
        <img
          src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1434&fit=fill&fm=webp"
          alt=""
          id="bannerImg"
          style={{ border: "1px solid black", width: "100vw", height: "25rem" }}
        />
      </div>
      <div
        id="browseCategory"
        style={{
          height: "15rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center ",
          fontSize: "2.5rem",
          color: "black",
          fontFamily: "Impact, fantasy",
        }}
      >
        <div id="textBrowseCategory" style={{ margin: "9rem 0 0 10rem" }}>
          BROWSE CATEGORIES
        </div>
        <div id="divider">
          <Divider orientation="horizontal" />
        </div>
      </div>
      <div
        id="categoryDiv"
        style={{
          width: "100vw",
          height: "55rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          id="category"
          style={{
            height: "50rem",
            width: "90vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                INTERNATIONAL BURGER FEST
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                MATCH DAY COMBOS
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                VALUE LUNCH SPECIALS
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                BOX MEALS
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                BURGERS
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                CHICKEN BUCKETS
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to="/menu">
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=48.85"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                RICE BOWLZ
              </p>
            </div>
          </div>
          </RouteLink>
          <RouteLink to='/menu'>
          <div
            className="cat"
            style={{
              height: "17rem",
              width: "18rem",
              backgroundColor: "#f8f7f5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <div
              className="catImg"
              style={{
                width: "100%",
                height: "17rem",
                borderTopLeftRadius: "10px",
              }}
            >
              <img
                src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
                alt=""
                style={{
                  width: "100%",
                  height: "17rem",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ color: "black", fontFamily: "Impact, fantasy" }}>
                VIEW ALL MENU
              </p>
            </div>
          </div>
          </RouteLink>
        </div>
      </div>
      <div
        id="coruselDiv"
        style={{
          width: "100vw",
          height: "50rem",
          backgroundColor: "#212529",
        }}
      >
        <div
          id="icon"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div
            id="icon1"
            style={{
              height: "3rem",
              width: "1.5rem",
              backgroundColor: "red",
              marginLeft: "13rem",
            }}
          ></div>
          <div
            id="icon2"
            style={{
              height: "3rem",
              width: "1.5rem",
              backgroundColor: "red",
              marginLeft: "2rem",
            }}
          ></div>
          <div
            id="icon3"
            style={{
              height: "3rem",
              width: "1.5rem",
              backgroundColor: "red",
              marginLeft: "2rem",
            }}
          ></div>
        </div>

        <div
          id="coruselTitle"
          style={{
            height: "10rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div id="ctitle">
            {" "}
            <p
              style={{
                color: "white",
                fontFamily: "Impact, fantasy",
                fontSize: "2rem",
                marginRight: "14.8rem",
              }}
            >
              EXCLUSIVE OFFERS FOR YOU
            </p>
          </div>
          <RouteLink to="/deals">
          <div id="viewmore">
            <Text
              style={{
                color: "white",
                fontFamily: "Arial",
                fontWeight: "900px",
              }}
            >
              View All Deals
            </Text>
          </div>
          </RouteLink>
        </div>
        <Carousel/>
      </div>
    </div>
  );
};

export default HomePage;
