import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/userRoutes";
const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};
const Register = () => {
  const dispatch = useDispatch();
  const { user, state, error } = useSelector(({ user }) => user);
  // console.log(user);
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    if (
      !inputs.name ||
      !inputs.email ||
      !inputs.password ||
      !inputs.confirmPassword
    ) {
      return toast.error("please fill all field", toastOptions);
    }
    if (inputs.password.length < 8) {
      return toast.error("password must be more that 8 char", toastOptions);
    }
    if (inputs.password !== inputs.confirmPassword) {
      return toast.error("password and confirm must be the same", toastOptions);
    }
    try {
      dispatch(signUp(inputs));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    if(state){
      history("/")
    }else{
      setHeight(ref.current?.offsetHeight);
      
    }
  }, [ref]);
  useEffect(()=>{
  if(error){
    toast.error(error,toastOptions)
  }
  if(state){
    history("/")
  }
  },[user,dispatch])
  return (
    <>
     {state === false ?  <div className="login">
        <div ref={ref}></div>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div className="logo">
              <span className="letter">
                <img
                  src="https://www.games2egypt.com/Images/Regions/1/1?fileFormat=1&width=191"
                  alt=""
                />
              </span>
            </div>
            <div className="name">
              <label>Name</label>
              <input
                className="input"
                type="text"
                name="name"
                value={inputs.name}
                onChange={(e) => handleChange(e.target)}
                placeholder="name"
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                className="input"
                type="email"
                value={inputs.email}
                onChange={(e) => handleChange(e.target)}
                name="email"
                placeholder="email"
              />
            </div>

            <div className="password">
              <label>Password</label>
              <input
                className="input"
                type="password"
                onChange={(e) => handleChange(e.target)}
                value={inputs.password}
                name="password"
                placeholder="password"
              />
            </div>
            <div className="password">
              <label>Confirm Password</label>
              <input
                className="input"
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) => handleChange(e.target)}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <span>
              Do You Have Account?
              <Link to="/login">Login</Link>
            </span>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>:""}
      <ToastContainer />
    </>
  );
};

export default Register;
