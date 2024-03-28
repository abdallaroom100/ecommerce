import mongoose from "mongoose";
import Products from "../model/productModel.js";
import Cart from "../model/CartModel.js";

// add product to schema
export const AddProducData = async (req, res) => {
  const {
    name,
    tags,
    pieces,
    about,
    publisher,
    desc,
    price,
    shownImage,
    anotherImages,
    type,
  } = req.body;
  try {
    const product = await Products.create({
      name,
      tags,
      pieces,
      publisher,
      about,
      desc,
      price,
      shownImage,
      anotherImages,
      type,
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// looking for  product in tags and description and name
export const searchProduct = async (req, res) => {
  const { name } = req.params;
  try {
    const products = await Products.find({
      $or: [
        { name: { $regex: name, $options: "i" } },
        { desc: { $regex: name, $options: "i" } },
        { tags: { $regex: name, $options: "i" } },
      ],
    }).select("shownImage price name");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get product data

export const getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json("invalid product id");
  }

  try {
    const product = await Products.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// add product to cart
export const productToCart = async (req, res) => {
  const { product } = req.body;
  try {


    res.cookie("cart", product,{
      path:"/",
      httpOnly:true
    }).send();
    // res.status(200).json("product addedd succesfully")
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getCart = async (req,res)=>{
  try {
    const cart = await Cart.findOne({userId:req.userId})

    res.status(200).json(cart)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

