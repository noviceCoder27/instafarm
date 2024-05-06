import {  Box, Flex,Text,Image,  useDisclosure, Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverArrow, PopoverBody } from "@chakra-ui/react"
import Cart from "./Cart";
import Leaf from './../assets/leaf.png'
import { Link, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const user= localStorage.getItem("token");
    const handleClick = () => {
        if(user) {
            localStorage.removeItem("token");
            location.reload();
        } else {
            navigate("/auth");
        }
    }
    return (
        <Flex h = "20%" w = "full" p = "1rem 2rem" alignItems = "center" gap = "1rem">
            <Flex alignItems = "center" w= "150px" gap = "0.5rem">
                <Image src = {Leaf} alt = "Leaf Icon" w= "30%" />
                <Text fontWeight= "bold" >Insta Farm</Text>
            </Flex>
            <Text _hover = {{color: "#2aeb31",fontWeight: "bold"}}>
                <Link to = "/">Home</Link>
            </Text>
            <Text _hover = {{color: "#2aeb31",fontWeight: "bold"}}> 
                <Link to = "/products">Products</Link>
            </Text>
            {user && <Flex cursor = "pointer" onClick={onOpen} alignItems = "center" gap = "0.5rem" p = "2" border = "4px solid #2aeb31" borderRadius = "20px">
                <Box color = "green">
                    <FaCartArrowDown />
                </Box>
                <Text>Cart</Text>
            </Flex>}
            <Popover>
                <PopoverTrigger>
                <Box ml = "auto" fontSize = "2rem" color = "#2aeb31" cursor = "pointer">
                    <FaRegUserCircle />
                 </Box>
                </PopoverTrigger>
                <PopoverContent  p = "2">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Text cursor = "pointer" onClick = {handleClick}>{user ? "Logout":"Login"}</Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Cart isOpen = {isOpen}  onClose = {onClose}/>
        </Flex>
    )
}

export default Navbar
