import {  Flex,Text, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Cart from "./Cart";


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex>
        <Flex cursor = "pointer" onClick={onOpen}>
            <Text>Cart Icon</Text>
            <Text>Cart</Text>
        </Flex>
        <Cart isOpen = {isOpen}  onClose = {onClose}/>
        </Flex>
    )
}

export default Navbar
