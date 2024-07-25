import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Modal_Home_2 = (e) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <button onClick={onOpen} id="applyOfferbtn">
        Apply Offer
      </button>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              style={{ fontFamily: "Impact, fantasy", textAlign: "center" }}
            >
              START YOUR ORDER
            </Text>
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody
            style={{
              testAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text fontFamily={"Impact, fantasy"} textAlign={"center"}>
              HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?
            </Text>
            <button
              id="applyOfferbtn"
              style={{ width: "30rem", height: "3rem", marginTop: "2rem" }}
            >
              Delivery
            </button>
            <button
              id="applyOfferbtn"
              style={{ width: "30rem", height: "3rem", marginTop: "2rem" }}
            >
              Pick up
            </button>
            <button
              id="applyOfferbtn"
              style={{ width: "30rem", height: "3rem", marginTop: "2rem" }}
            >
              Dine in
            </button>
            <Text textAlign={"center"}>{e.description}</Text>
          </ModalBody>

          <ModalFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"10rem"}
          ></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Modal_Home_2;
