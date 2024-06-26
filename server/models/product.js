import  { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required:true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    img: {type: String,required: true}
},{timestamps: true});

const Product = model("Product", ProductSchema);

export default Product;