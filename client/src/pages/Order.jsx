import { Box, Button, Flex, FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"


const Order = () => {
  return (
    <Flex direction = "column" minH = "100vh">
      <Navbar />
      <Box w= "full" h = "10px" bg = "lightgreen"></Box>
      <Flex p = "2rem" bg = "whitesmoke" flexGrow= "1">
        <FormControl w = "50%" display= "flex" flexDir= "column" gap ="2">
          <Flex w = "full" gap = "1rem">
            <Box w= "full">
              <FormLabel>First Name</FormLabel>
              <Input type='text' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
            </Box>
            <Box w = "full">
              <FormLabel>Last Name</FormLabel>
              <Input type='text' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
            </Box>
          </Flex>
          <FormLabel>Area</FormLabel>
          <Input type='text' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
          <FormLabel>City</FormLabel>
          <Input type='text' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
          <FormLabel>State</FormLabel>
          <Input type='text' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
          <FormLabel>Country</FormLabel>
          <Input type='text' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
          <Flex w= "full" gap = "1rem">
            <Box w = "full">
              <FormLabel>House No</FormLabel>
              <Input type='number' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
            </Box>
            <Box w = "full">
              <FormLabel>Pin Code</FormLabel>
              <Input type='number' border = "2px solid black" _hover = {{border: "2px solid black"}}/>
            </Box>
          </Flex>
        </FormControl>
        <Flex direction = "column" ml = "auto" mr = "auto" bg= "white"  w = "400px" h = "300px" p = "1rem" boxShadow = "gray 0px 2px 8px 0px">
          <Text fontWeight= "semibold">Total Price:</Text>
          <Text fontWeight= "bold" fontSize= "2.5rem" color = "red">₹250</Text>
          <hr />
          <Text mt = "1rem">Payment Method:</Text>
          <Select mt = "1rem">
            <option>Cash On Delivery</option>
            <option>UPI</option>
            <option>Net Banking</option>
          </Select>
          <Button mt = "auto" bgColor = "yellow" _hover = {{bg: "gold"}}>Pay Now</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Order
