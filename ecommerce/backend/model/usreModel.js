import mongoose from "mongoose"


const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
},{timestamps:true})

const User = mongoose.model("ecommernceUsers",userSchema)

export default User