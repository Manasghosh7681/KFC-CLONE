import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { LiaCartPlusSolid } from "react-icons/lia";
import "./cardstyle.css";
import { AuthContext } from "../Context/AuthContext";
import { DataContext } from "../Context/DataContext";

const CardType2 = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  let { isLogin } = useContext(AuthContext);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  let {incCounter}=useContext(DataContext);
  async function getData() {
    let res = await fetch("http://localhost:3000/products");
    let data = await res.json();
    setData(data);
  }
  async function getCartData() {
    let res = await fetch("http://localhost:3000/cart");
    let data = await res.json();
    setCart(data);
  }
  function pushData(e) {
    let flag = false;
    if (isLogin) {
      setMessage1("Successfully Added to Cart");
      setMessage2("Enjoy Your Meal");
      cart.forEach((el) => {
        if (el.id == e.id) {
          flag = true;
          return;
        } else {
          flag = false;
        }
      });
      if (flag == false) {
        let obj = {
          id: e.id,
          img: e.img,
          title: e.title,
          desc: e.desc,
          category: e.category,
          price: e.price,
        };
        async function setData() {
          let res = await fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          });
        }
        setData();
        incCounter();
        onOpen();
      }
    } else {
      setMessage1("INFORMATION");
      setMessage2("Please Log In First");
      onOpen();
    }
  }

  useEffect(() => {
    getData();
    getCartData();
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "4rem",
        backgroundColor: "white",
        width: "65vw",
      }}
    >
      {data.map((e) => (
        <Card maxW="sm">
          <CardBody style={{ backgroundColor: "white", width: "17rem" }}>
            <Image src={e.img} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{e.title}</Heading>
              <div>
                <Text style={{ display: "flex" }}>
                  <img
                    src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
                    alt=""
                    style={{ marginRight: "1.1rem" }}
                  />
                  {e.category}
                </Text>
              </div>
              <Text color="blue.600" fontSize="2xl">
              ₹{e.price}
              </Text>
              <Text>{e.desc}</Text>
            </Stack>
          </CardBody>
          {/* <Divider /> */}
          <CardFooter
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ButtonGroup spacing="2">
              <Button
                variant="ghost"
                colorScheme="blue"
                style={{
                  width: "10rem",
                  backgroundColor: "#e4002b",
                  color: "white",
                  borderRadius: "50px",
                  height: "3rem",
                }}
                onClick={() => {
                  pushData(e);
                }}
                id="addtocart"
              >
                Add to cart <LiaCartPlusSolid />
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{message1}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{message2}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CardType2;
