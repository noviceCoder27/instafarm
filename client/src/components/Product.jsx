import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { addToCart } from "../apis/cart";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Product = ({item,cart}) => {
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(0);
    const user = localStorage.getItem("token");
    const addItem = async() => {
        if(user) {
            if(quantity!==0) {
                try {
                    await addToCart(item,quantity);
                } catch(err) {
                    console.log(err);
                }
            }
        } else {
            navigate("/auth")
        }
        
    }
    return (
        <Box mt= {cart && "1rem"} w= {!cart && "20vw"} minw= "200px" bg = "white" p = "2rem" borderRadius = "20px"  boxShadow= "#20f53c 0px 2px 8px 0px" display = {cart ? "flex": "block"} gap = "1rem" alignItems= "center">
            <Image h = {cart ? "100px" :"200px"} w= {cart ? "100px": "full"}src = {item.img} alt = "Product Image" />
            <Box>
                <Text mt= "1rem" fontWeight = "semibold" fontSize = "1rem">{item.name}</Text>
               {!cart && <Text color = "gray">{item.description}</Text>}
                <Text my = "1rem" fontWeight= "bold" fontSize = "1.5rem" color = "darkgreen">₹{item.price}.00</Text>
                <Flex>
                    <Flex alignItems= "center" gap = "0.5rem">
                        <Button onClick = {() => setQuantity(prev => prev !== 0 ? prev - 1: prev)}>-</Button>
                        <Text fontWeight= "semibold">{cart? item.cartQuantity: quantity}</Text>
                        <Button onClick = {() => setQuantity(prev => prev !== item.quantity ? prev +1:prev)}>+</Button>
                    </Flex>
                   {cart ?
                   <Button ml = "2rem" borderRadius="full" h = "50px" bg = "#fcd9db" color = "#9c1f26" _hover = {{bg: "#fca4a9"}}> 
                    <FaTrash />
                   </Button>
                   : 
                   <Button ml = "1rem" onClick = {addItem} bgColor = "greenyellow" _hover={{bg: "green",color: "white"}}>Add To Cart</Button>}
                </Flex>
            </Box>
            
        </Box>
    )
}

export default Product
