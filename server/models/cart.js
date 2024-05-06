import  { Schema, model } from "mongoose";

const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{type: Object}]
},{timestamps: true});

const Cart = model("Cart", CartSchema);

export default Cart;