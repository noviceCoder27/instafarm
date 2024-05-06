import  { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: Object, ref: 'Product' }],
    totalPrice: {type: Number, required: true},
    name: {type: Object, required: true},
    address: {type: Object, required: true},
    paymentMethod: {type: String, enum: ["Cash On Delivery","UPI","Net Banking"], required: true},
    date: { type: Date, default: Date.now },
},{timestamps: true});

const Order = model("Order", OrderSchema);

export default Order;