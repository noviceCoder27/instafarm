import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react"
import { login, signUp } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from './../assets/veggies.png'

const Auth = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({email: "", userName: "", password: ""});
    const [toggleLogin,setToggleLogin] = useState(false);
    const handleSubmit = async() => {
        try {
            const data = toggleLogin ? await login(user): await signUp(user);
            localStorage.setItem("token",data.token);
            navigate("/");
        } catch(err) {
            console.log(err);
        }
       
    }
    return (
        <Flex direction = "column" minH = "100vh" bg = "white">
            <Navbar />
            <Flex bg = "#c5f4c1" flexGrow= "1" p = "4rem 2rem">
                <Box w = "50%">
                    {/* <Button onClick = {() => setToggleLogin(false)}>Register</Button>
                    <Button onClick = {() => setToggleLogin(true)}>Login</Button> */}
                    <Heading mb = "4rem">Get Started Now</Heading>
                    <FormControl color = "black" display = "flex" flexDirection= "column" gap = "0.5rem">
                        <FormLabel>Email address</FormLabel>
                        <Input w= "50%" border ="2px solid darkslategray" _hover = {{border: "2px solid darkslategray"}} type='email' value = {user.email} onChange = {(e) => setUser(prev => ({...prev,email: e.target.value}))}/>
                        {toggleLogin ? <></>:
                        <>
                            <FormLabel>User Name</FormLabel>
                            <Input w= "50%" border ="2px solid darkslategray" _hover = {{border: "2px solid darkslategray"}} type='text' value = {user.userName} onChange = {(e) => setUser(prev => ({...prev,userName: e.target.value}))}/>
                        </>}
                        <FormLabel>Password</FormLabel>
                        <Input w= "50%" border ="2px solid darkslategray" _hover = {{border: "2px solid darkslategray"}} type='password' value = {user.password} onChange = {(e) => setUser(prev => ({...prev,password: e.target.value}))}/>
                    </FormControl>
                    <Box>
                        {toggleLogin ? 
                        <>
                            <Button mt = "2rem" _hover = {{bg: "darkgreen"}}borderRadius = "20px" color = "white" bg = "green" w= "50%" onClick = {handleSubmit}>
                                Login
                            </Button>
                            <Text mt = "1rem" onClick = {() => setToggleLogin(false)}>Dont have an account? <Link style = {{color: "green",fontWeight: "600"}}>Sign up</Link></Text>
                        </>
                       
                        : 
                        <>
                            <Button _hover = {{bg: "darkgreen"}}borderRadius = "20px" color = "white" bg = "green" w= "50%" mt = "2rem" onClick = {handleSubmit}>
                                Register
                            </Button>
                            <Text mt = "1rem" onClick = {() => setToggleLogin(true)}>Already have an account? <Link style = {{color: "green",fontWeight: "600"}}>Sign in</Link></Text>
                        </>
                        }
                    </Box>
                </Box>
                <Box>
                    <Text fontWeight= "semibold" fontSize= "3rem" color = "darkslategray">Reach your customers faster,</Text>
                    <Text fontWeight= "bold" fontSize= "4rem">With Us</Text>
                    <Image src = {Background} alt = "Vegetable stall" />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Auth
