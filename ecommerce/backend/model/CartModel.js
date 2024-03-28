import mongoose from "mongoose";

const Schema = mongoose.Schema

const cartSchema = new Schema({
    userId:String,
    products:[Object],
    orders:[{
        quantity:Number,
        productId:String,
        type:String,
        price:String,
        name:String,
    }],
    address:{
        street:String,
        city:String,
        zip:String
    }
})


const Cart = mongoose.model("ecommernceCart",cartSchema)

export default Cart 