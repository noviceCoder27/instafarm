import User from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";


const userForm = async(req,res,next,toRegister,msg) => {
    const {userName,password,email} = req.body;
    const user = toRegister ? await User.register({userName,password,email}): await User.login({email,password});
    const token = generateToken(user._id);
    res.status(201).json({msg, token});
   
}

export const register = async (req,res,next) => {
    userForm(req,res,next,true,'User registered successfully');
}

export const login = async (req,res,next) => {
    userForm(req,res,next,false,'User logged in successfully');
}

