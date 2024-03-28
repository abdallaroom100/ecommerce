import express from "express";
import { checkUser, logOut, login, signup } from "../controllers/userControllers.js";
import { authUser } from "../auth/auth.js";

const router = express.Router();
router.post("/auth/signup",signup);
router.post("/auth/login",login);
router.post("/auth/logout",logOut);
router.post("/auth/check", authUser,checkUser);
export default router;
