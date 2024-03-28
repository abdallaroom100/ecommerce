import express from "express"
import { addToCart } from "../controllers/cartController.js"
import { authUser } from "../auth/auth.js"

const router = express.Router()


router.post("/cart/add",authUser,addToCart)

export default router
