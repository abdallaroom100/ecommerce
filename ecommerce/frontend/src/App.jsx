import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Search from "./pages/Search";

import { store } from "./redux/store";
import Product from "./pages/Product";
import { useEffect } from "react";
import axios from "axios";
import { checkUser } from "./redux/userRoutes";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./pages/Cart";
import { getCart } from "./redux/ProductRoutes";
import {useScroll} from "framer-motion"
import Test from "./pages/Test";
axios.defaults.withCredentials = true;
function App() {

  const scroll = useScroll()
  console.log(scroll);
  const {state} = useSelector(({user})=>user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser());
    dispatch(getCart())
  }, [state]);
  return ( 
    <BrowserRouter>
    
        <Menu />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:key" element={<Search />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
