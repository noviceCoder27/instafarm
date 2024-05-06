import { Box, Flex } from "@chakra-ui/react"
import Navbar from "../components/Navbar"


const Order = () => {
  return (
    <Flex direction = "column" minH = "100vh">
      <Navbar />
      <Box w= "full" h = "10px" bg = "lightgreen"></Box>
    </Flex>
  )
}

export default Order
