import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userRoutes";


const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Login = () => {
  const ref = useRef();
  const [currentError,setCurrentError] = useState("")
  const {user,state,error} = useSelector(({user})=>user)
  const dispatch = useDispatch()
  const [height, setHeight] = useState(0);
  const [data,setData]= useState({
    email:"",
    password:""
  })
  const history = useNavigate();
  const handleChange = (e)=>{
   setData({
    ...data,
    [e.name]:e.value
   })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!data.email || !data.password){
      return toast.error("please fill all fileds",toastOptions)
    }

   dispatch(login(data))
  }
  useEffect(() => {
    
    if(state){
      history("/")
    }else setHeight(ref.current?.offsetHeight);
    
  }, [ref]);
  useEffect(()=>{
    setCurrentError(error.message)
  },[error])
  useEffect(()=>{

    if(currentError){
      toast.error(currentError,toastOptions)
      setCurrentError("")
    }
  if(state){
    history("/")
  }
  },[currentError,dispatch])
  useEffect(()=>{
    if(state){
      history("/")
    }
  },[state,dispatch])
  return (
    <>
    {state === false ? <div className="login">
      <div ref={ref}>
        {/* <Navbar /> */}
        <Menu />
      </div>
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
          <div className="email">
            <label>Email</label>
            <input
              className="input"
              type="email"
              name="email"
              onChange={(e)=>handleChange(e.target)}
              value={data.email}
              placeholder="email"
            />
          </div>

          <div className="password">
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={data.password}
              onChange={(e)=>handleChange(e.target)}
              name="password"
              placeholder="password"
            />
          </div>
          <span>
            Do You Have Account?
            <Link to="/register">SignUp</Link>
          </span>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    :""}
    <ToastContainer/>
    </>
  );
};

export default Login;
