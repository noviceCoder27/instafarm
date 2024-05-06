import axios from 'axios'
const products_url = 'http://localhost:3000/products';

export const getProducts = async () => {
    const res = await axios.get(`${products_url}`);
    return res.data;
}