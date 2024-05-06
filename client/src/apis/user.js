import axios from 'axios';
const users_url = 'http://localhost:3000/users';


export const login = async (user) => {
    const res = await axios.post(`${users_url}/login`,user);
    return res.data;

}

export const signUp = async (user) => {
    const res = await axios.post(`${users_url}/register`,user);
    return res.data;
}

