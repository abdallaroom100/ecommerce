import express from "express"
import { AddProducData, getCart, getProduct, productToCart, searchProduct } from "../controllers/productControllers.js"
import { authUser } from "../auth/auth.js"
const router = express.Router()


router.post("/search/:name",searchProduct) // search for product
router.post("/product",AddProducData) // create product 
router.get("/product/:id",getProduct) // the data about specific product 
router.post("/product/cart",productToCart)
router.post("/cart",authUser,getCart)

export default router