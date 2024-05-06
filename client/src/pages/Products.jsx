import { useEffect, useState } from "react"
import { getProducts } from "../apis/product";
import Product from "../components/Product";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";


const Products = () => {
    const [products,setProducts] = useState(null);
    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchProducts();
    },[]);

    const displayProducts = products?.map((item,index) => (
        <Product key = {index} item = {item} />
    ))

    return (
        <Flex direction= "column">
            <Navbar />
            <Box w= "full" h = "10px" bg = "lightgreen"></Box>
            <Flex p = "2rem 4rem" bg = "whitesmoke" justifyContent = "content" flexWrap= "wrap" gap = "2rem">
                {displayProducts}
            </Flex>
            
        </Flex>
    )
}

export default Products
