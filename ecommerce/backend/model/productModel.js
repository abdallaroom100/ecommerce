import mongoose from "mongoose"

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:String,
    desc:[String],
    price:String,
    tags:[String],
    pieces:{
        type:Number,
        default:0
    },
    about:[String],
    shownImage:String,
    anotherImages:[String],
    type:String,
    publisher:String
},{timestamps:{type:Date,default:Date.now}})

const Products =  mongoose.model("PrdouctModelEcommerce",productSchema)
export default Products