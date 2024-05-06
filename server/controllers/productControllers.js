import Product from "../models/product.js"

export const getProducts = async(req,res) => {
    const products = await Product.find({});
    res.status(200).json(products);
}

// export const getProductDetails = async(req,res) => {
//     const {id} = req.query;
//     const product = await Product.findOne({_id: id});
//     res.status(200).json(product);
// }

export const addProduct = async(req,res) => {
    const {quantity,name,price,description,img} = req.body;
    await Product.create({quantity,name,price,description,img});
    res.status(201).json({msg: "Product created successfully"});
}

// export const updateProduct = async(req,res) => {
//     const {id:_id} = req.params;
//     const {quantity,title,price,description} = req.body;
//     await Product.findByIdAndUpdate(_id,{quantity,title,price,description});
//     res.status(201).json({msg: "Product updated successfully"});
// }

// export const deleteProduct = async(req,res) => {
//     const {id:_id} = req.params;
//     await Product.findByIdAndUpdate(_id);
//     res.status(201).json({msg: "Product deleted successfully"});
// }