import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { addToCart, getProduct } from "../redux/ProductRoutes";
import moment from "moment";
import Footer from "../components/Footer";
import { setProduct } from "../redux/productSlice";
import axios from "axios";

const Product = () => {
  const dispatch = useDispatch();
  const productId = useParams()
 const history = useNavigate()
  const { product } = useSelector(({ products }) => products);
  const { user } = useSelector(({ user }) => user);
  const [productData, setProductData] = useState("");
  const [sliderWidth, setSliderWidth] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();
  const imgSlider = useRef();
  const {state} = useSelector(({user})=>user)

  const addCart = async (data)=> {

  dispatch(addToCart({...data,userId:user._id,productId:productId.id}))
  };
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  useEffect(() => {
    setProductData(product);
  }, [product]);
  useEffect(() => {
    if (imgSlider.current) {
      window.addEventListener("resize", (e) => {
        setSliderWidth(
          imgSlider?.current?.scrollWidth - imgSlider?.current?.offsetWidth
        );
      });
      setSliderWidth(
        imgSlider?.current?.scrollWidth - imgSlider?.current?.offsetWidth
      );
    }
  }, [imgSlider, product]);

  return (
    <>
      {productData?.name && (
        <div className="productDetail"> 
          <ProductContainer>
            <div className="details">
              <div className="images">
                <div className="top">
                  <img src={productData.anotherImages[currentImage]} alt="" />
                </div>
                <motion.div
                  ref={imgSlider}
                  className="bottom"
                  drag={"x"}
                  dragConstraints={{ right: 0, left: -sliderWidth }}
                >
                  {productData.anotherImages.map((img, index) => {
                    return (
                      <img
                        onClick={(e) => setCurrentImage(index)}
                        src={img}
                        alt=""
                      />
                    );
                  })}
                </motion.div>
              </div>
              <>
                <div className="info">
                  <h3 className="name">{productData?.name}</h3>
                  <h3 className="price">
                    <span className="pound"> EGP</span> {productData.price}.00
                  </h3>
                  <button
                    onClick={()=>
                      state === false ? history("/login"):
                      state === true ?  addCart(product).then(()=>{
                      history("/cart")
                    }):""}
                    className="addToCart"
                  >
                    ADD TO CART
                  </button>
                  <div className="product-information">
                    <h3 className="title">product information</h3>

                    <div className="product-detail">
                      <div className="left">Publisher</div>
                      <div className="right">{productData.publisher}</div>
                    </div>
                    <div className="product-detail">
                      <div className="left">Type</div>
                      <div className="right">{productData.type}</div>
                    </div>
                    <div className="product-detail">
                      <div className="left">Release</div>
                      <div className="right">
                        {moment(productData.createdAt).fromNow()}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="last-section">
              <div className="about">
                <h2>About</h2>
                <p>{productData.about}</p>
              </div>
              <div className="descr">
                <h2>description</h2>
                <ul>
                  {productData.desc.map((item, index) => {
                    return (
                      <li>
                        {" "}
                        {index + 1}:{item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </ProductContainer>
        </div>
      )}
      <Footer />
    </>
  );
};
const ProductContainer = styled.div`
  .details {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 3rem;
    .images {
      flex: 1;

      .top {
        display: flex;
        justify-content: center;
      }
      .top img {
        max-width: 100%;
        padding: 2rem;
        height: 500px;
      }
    }
    .price {
      color: #95ab52;
      margin: 10px 0;
    }
    .images {
      overflow: hidden;
      .bottom {
        display: flex;
        width: 100%;
        gap: 11px;
      }
      .bottom img {
        max-width: calc(100% / 4);
        /* pointer-events: none; */
        padding: 17px;
        background: #0b0c0c7a;
      }
    }
    .addToCart {
      padding: 10px;
      border-radius: 7px;
      background-color: #95ab52;
      color: white;
      border: none;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      flex: 1;
      background: #0c090b75;
      max-width: 400px;
      margin-top: 2rem;
      padding: 2rem;
      border-radius: 8px;
      .name {
        background: transparent;
      }
      .product-information {
        .title {
          margin-bottom: 10px;
        }
        .product-detail {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #453939;
          padding: 10px;
        }
      }
    }
  }

  @media (min-width: 991px) {
    width: 950px;
    margin: auto;
  }
  @media (max-width: 991px) {
    .about {
      padding: 0px !important;
    }
    .details {
      flex-direction: column;
      .bottom img {
        padding: 7px !important;
      }
      .info {
        max-width: 90%;
        margin: auto;
      }
    }
    .last-section {
      width: 90% !important;
      margin: 2rem auto !important;
    }
  }
  @media (min-width: 1300px) {
    width: 1250px;
    margin: auto;
  }
  .about {
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 3rem;
    flex-direction: column;
    padding: 14px;
    h2 {
      display: flex;
      justify-content: center;
      color: #95ab52;
      padding-bottom: 1rem;
    }
  }
  .last-section {
    width: 100%;
    background: #0c090b75;
    margin: 2rem 0px;
    border-radius: 7px;
    padding: 0px 1rem;
    padding-bottom: 1rem;
    .descr {
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      h2 {
        display: flex;
        justify-content: center;
        color: #95ab52;

        padding: 1rem 0;
      }
      li {
        color: white;
      }
    }
  }
`;
export default Product;
