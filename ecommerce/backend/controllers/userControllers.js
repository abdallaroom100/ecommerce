// signup user
import validator from "validator";
import User from "../model/usreModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Cart from "../model/CartModel.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body.formData;

  try {
    if (!name || !email || !password) {
      return res.status(401).json("please fill all fields");
    }
    if (!validator.isEmail(email)) {
      return res.status(401).json("invalid email");
    }
    if (name < 3) {
      return res.status(401).json("name must be more than 3 chars");
    }
    if (password.length < 8) {
      return res.status(401).json("make password more that 8 chars");
    }
    const exist = await User.findOne({ email });
    if (exist) {
      // return res.status(401).json("this email is already in use")
      throw new Error("this email is already been in use");
    }
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    const user = await User.create({
      name,
      password: hash,
      email,
    })
    const cart = await Cart.create({userId:user._id})
    // console.log(cart);

    const token = jwt.sign({ email: user.email, id: user._id }, "secret");
    res.cookie("user", token);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body.formData;

  try {
    if (!email || !password) {
      return res.status(401).json("please fill all fields");
    }

    const exist = await User.findOne({ email });
    if (!exist) {
      // return res.status(401).json("this email is already in use")
      throw new Error("email or password is incorrect");
    }
    const Vpassword = bcrypt.compare(password, exist.password);
    if (!Vpassword) {
      throw new Error("email or password is incorrect");
    }

    const token = jwt.sign({ email: exist.email, id: exist._id }, "secret");
    res.cookie("user", token); 
    res.status(200).json(exist);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const checkUser = async (req, res) => {
   
  try {
    console.log(req.userId);
    const user =await User.findById(req.userId)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
};

// logout user  
export const logOut = async (req,res)=>{
  try {
    res.clearCookie("user")
    res.status(200).json("user logged out successfully")
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}