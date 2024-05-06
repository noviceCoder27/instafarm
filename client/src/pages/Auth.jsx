import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react"
import { login, signUp } from "../apis/user";
import { useNavigate } from "react-router-dom";


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
        <div>
        <Box>
            <Button onClick = {() => setToggleLogin(false)}>Register</Button>
            <Button onClick = {() => setToggleLogin(true)}>Login</Button>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' value = {user.email} onChange = {(e) => setUser(prev => ({...prev,email: e.target.value}))}/>
                {toggleLogin ? <></>:
                <>
                    <FormLabel>User Name</FormLabel>
                    <Input type='text' value = {user.userName} onChange = {(e) => setUser(prev => ({...prev,userName: e.target.value}))}/>
                </>}
                <FormLabel>Password</FormLabel>
                <Input type='password' value = {user.password} onChange = {(e) => setUser(prev => ({...prev,password: e.target.value}))}/>
            </FormControl>
            <Box>
                {toggleLogin ? <Button onClick = {handleSubmit}>Login</Button>: <Button onClick = {handleSubmit}>Register</Button>}
            </Box>
        </Box>
        </div>
    )
}

export default Auth
