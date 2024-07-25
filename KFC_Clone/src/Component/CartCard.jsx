"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";

export default function CartCard(e) {
  const [counter, setCounter] = useState(1);
  let { decCounter } = useContext(DataContext);
  let { assignPrice, decPrice, incPrice } = useContext(DataContext);
  async function deleteData(e,id,x) {
    let res = await fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    });
    decCounter();
    decPrice(e.price*x);
  }


  useEffect(() => {
    assignPrice();
  },[]);

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={e.img}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {e.category}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {e.title}
          </Heading>
          <Stack direction={"column"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ₹{e.price}
            </Text>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => {
                  if (counter > 1) {
                    setCounter(counter - 1);
                    decPrice(Math.floor(e.price));
                  }
                }}
              >
                -
              </Button>
              <Text>{counter}</Text>
              <Button
                onClick={() => {
                  setCounter(counter + 1);
                  incPrice(Math.floor(e.price));
                }}
              >
                +
              </Button>
            </div>
            <Text>Total Price: ₹{Math.floor(e.price * counter)}</Text>
            <Button
              onClick={() => {
                let x = counter;
                deleteData(e,e.id,x);
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
