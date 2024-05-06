import axios from 'axios'
const cart_url = 'http://localhost:3000/cartItems';

export const getCartItems = async () => {
    const options = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    const res = await axios.get(`${cart_url}`,options);
    return res.data;
}

export const addToCart = async (product,quantity) => {
    const options = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    const res = await axios.post(`${cart_url}`,{product, cartQuantity:quantity},options);
    return res.data;
}