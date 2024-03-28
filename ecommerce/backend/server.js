import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import productsRouter from "./router/productRouter.js"
import userRouter from "./router/userRouter.js"
import cartRouter from "./router/cartRouter.js"
const app = express()
dotenv.config()

// middlewares
app.use(express.json())
app.use(cors({credentials:true,origin:"http://localhost:3000"}))
// app.use(cors())
app.use(cookieParser())
app.use(productsRouter)
app.use(userRouter)
app.use(cartRouter)
// connect to mongoose 
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen("5000",()=>{
        console.log("connected to mogoose and port 5000");
    })
}).catch(error=>console.log(error))


// router 

