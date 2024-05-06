import Cart from './../models/cart.js';

export const getCartItems = async(req,res) => {
    const {_id} = req.headers["user"];
    const item = await Cart.findOne({user: _id});
    const products = item?.products;
    res.status(200).json(products);
}

export const addToCart = async(req,res) => {
    const {_id} = req.headers["user"];
    const {product,cartQuantity} = req.body;
    const {_id:product_id} = product;
    let cart = await Cart.findOne({ user: _id });
    if (!cart) {
        cart = await Cart.create({ user: _id, products: [{...product,cartQuantity}]});
        res.status(201).json({msg: "Product added to new cart successfully"});
    } else {
        const productIndex = cart.products.findIndex(p => p._id.toString() === product_id.toString());
        if (productIndex > -1) {
            cart.products[productIndex].cartQuantity = cartQuantity;
        } else {
            cart.products.push({...product, cartQuantity});
        }
        await cart.save();
        res.status(201).json({msg: "Product added in existing cart successfully"});
    }
}

export const updateQuantity = async(req,res) => {
    const {id:_id} = req.headers["user"];
    const {quantity} = req.body;
    await Cart.findByIdAndUpdate(_id,{quantity});
    res.status(201).json({msg: "Cart updated successfully"});
}

export const removeFromCart = async(req,res) => {
    const {id:_id} = req.query;
    await Cart.findByIdAndUpdate(_id);
    res.status(201).json({msg: "Item deleted successfully"});
}