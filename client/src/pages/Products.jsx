import { useEffect, useState } from "react"
import { getProducts } from "../apis/product";
import Product from "../components/Product";
import { Flex } from "@chakra-ui/react";
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
            {displayProducts}
        </Flex>
    )
}

export default Products
