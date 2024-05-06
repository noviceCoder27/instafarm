import Order from "../models/order.js";
import Cart from './../models/cart.js';


export const getOrders = async(req,res) => {
    const {_id} = req.headers["user"];
    const orders = await Order.find({user: _id});
    res.status(200).json(orders);
}

export const addOrder = async(req,res) => {
    const {_id} = req.headers["user"];
    const {products,totalPrice,name,address,paymentMethod} = req.params;
    await Order.create({user: _id, products,totalPrice,name,address,paymentMethod});
    await Cart.findOneAndDelete({user: _id});
    res.status(201).json({msg: "Order successfull"});
}