import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import Navbar from './../components/Navbar';
import Background from './../assets/background.png'
import Star from './../assets/star.png'


const Home = () => {
  return (
    <Flex direction = "column" h = "100vh" overflowY = "hidden">
      <Navbar />
      <Flex position = "relative" h = "90%">
        <Image src = {Star} alt = "Star" position = "absolute" top = "12rem" left = "25rem" />
        <Text position = "absolute" top = "5rem" left = "2rem" color = "white" fontWeight= "semibold" fontSize= "2rem">
        WELCOME TO Agricultural Products Rural <br /> Electorinic Commerce Store
        </Text>
        <Heading position = "absolute" top = "15rem" left = "2rem" color = "white" fontWeight= "bold" fontSize= "4rem">INSTA FARM</Heading>
        <Text position = "absolute" top = "22rem" left = "2rem" color = "white" fontWeight= "medium" fontSize= "1rem">
        Empowering Rural Dreams, Nurturing Agricultural Growth <br /> – AgriConnect Hub  cultivates prosperity from the roots up.
        </Text>
        <Image src = {Background} alt = "Background" w= "100%" />
      </Flex>
    </Flex>
  )
}

export default Home
