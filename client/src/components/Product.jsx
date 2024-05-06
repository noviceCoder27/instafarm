import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { addToCart } from "../apis/cart";


const Product = ({item,cart}) => {
    const [quantity,setQuantity] = useState(0);
    const addItem = async() => {
        if(quantity!==0) {
            try {
                await addToCart(item,quantity);
            } catch(err) {
                console.log(err);
            }
        }
    }
    return (
        <Box>
            <Image src = {item.img} alt = "Product Image" />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Flex>
                <Flex>
                    <Button onClick = {() => setQuantity(prev => prev !== 0 ? prev - 1: prev)}>-</Button>
                    <Text>{cart? item.cartQuantity: quantity}</Text>
                    <Button onClick = {() => setQuantity(prev => prev !== item.quantity ? prev +1:prev)}>+</Button>
                </Flex>
                <Button onClick = {addItem}>Add To Cart</Button>
            </Flex>
        </Box>
    )
}

export default Product
