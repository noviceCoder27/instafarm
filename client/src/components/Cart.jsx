import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getCartItems } from "../apis/cart";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Cart = ({isOpen,onClose}) => {
    const [cartItems,setCartItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCartItems = async() => {
            const data = await getCartItems();
            setCartItems(data);
        }
        fetchCartItems();
    },[isOpen]);
    const displayCartItems = cartItems.length ? cartItems?.map((item,index) => (
        <Product key = {index} item = {item} cart = {true}/>
    )): "Nothing to display"
    const handleClick = () => {
        navigate("/order");
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Cart</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {displayCartItems}
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
                </Button>
                <Button variant='ghost' onClick = {handleClick}>Proceed to Order</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Cart
