import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiShoppingBasketFill } from "react-icons/ri";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { useFetcher, useNavigate } from "react-router-dom";
const Cart = () => {
  let cost = 0;
  const { cart } = useSelector(({ products }) => products);
  const { state } = useSelector(({ user }) => user);
  const history = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(cart);
  }, [cart]);
  useEffect(() => {
    if (state === false) {
      history("/login");
    }
  }, [state]);

  return (
    <>
      {state === false ? (
        <div className="container">
          {/* <div className="title">
                <h3 style={{ color: "white" }}>Shopping Cart</h3>
              </div> */}
          <div className="cart">
            <div className="logo">
              <RiShoppingBasketFill />
            </div>
            <h3>Empty Cart</h3>
            <span>
              Add itmes to your cart and view them here before you checkout
            </span>
            <button>Continue Shopping</button>
          </div>
        </div>
      ) : state === true ? (
        <CartComponent>
          {cart?.length > 0 ? (
            <div className="container">
              {/* <div className="title">
                 <h3 style={{ color: "white" }}>Shopping Cart</h3>
               </div> */}
              <div className="left-side">
                <div className="products">
                  <div className="top">
                    <h2>cart Contents</h2>
                    <span>Contents of Your Shopping Cart</span>
                  </div>
                  <div className="bottom">
                    {cart.map((item, index) => {
                      console.log(Number(item.quantity));
                      cost = cost + Number(item.price) * Number(item.quantity);

                      return (
                        <div className="item">
                          <div className="image">
                            <img src={item.shownImage} alt="" />
                          </div>
                          <div className="info">
                            <h3>{item.name}</h3>
                            <span>{item.type}</span>
                            <h3 style={{ color: "#95ab52" }}>
                              EGP {item.price}
                            </h3>
                          </div>
                          <div className="delete">
                            <span>
                              <FaTrash /> delete
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="right-side">
                <div className="content">
                  <h3>subTotal</h3>
                  <span>Summary of Cart Subtotal</span>
                  <div className="inf-1">
                    <span>items</span>
                    <span>{cost}.00 EGP</span>
                  </div>
                  <div className="inf-1">
                    <span>+ Shipping And Handling</span>
                    <span>0.0 EGP</span>
                  </div>
                  <div className="inf-1">
                    <span>+ Payment Fees</span>
                    <span>0.0 EGP</span>
                  </div>
                  <hr />
                  <div className="inf-1">
                    <h3>Cart Total</h3>
                    <h3 style={{ color: "rgb(149, 171, 82)" }}>
                      {cost}.00 EGP
                    </h3>
                  </div>
                  <button className="checkout-btn">Continue to checkout</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              {/* <div className="title">
                    <h3 style={{ color: "white" }}>Shopping Cart</h3>
                  </div> */}
              <div className="cart">
                <div className="logo">
                  <RiShoppingBasketFill />
                </div>
                <h3>Empty Cart</h3>
                <span>
                  Add itmes to your cart and view them here before you checkout
                </span>
                <button>Continue Shopping</button>
              </div>
            </div>
          )}
        </CartComponent>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

let CartComponent = styled.div`
  margin: 4rem 0;
  .container {
    .bottom {
      max-height: 50vh;
      overflow: auto;
    }
    button.checkout-btn {
      width: 100%;
      color: white;
      background: rgb(149, 171, 82);
      padding: 12px;
      font-size: 18px;
      border: none;
      margin: 1.5rem 0;
      border-radius: 6px;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    .title {
      display: flex;
      justify-content: start;
      /* align-items: center; */
      margin-left: 1rem;
    }
    .cart {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
      button {
        background: #007ac3;
        color: white;
        padding: 10px 20px;
        margin: 2rem;
        font-weight: bold;
        cursor: pointer;
      }
      .logo > svg {
        height: 150px;
        width: 80px;
        transform: scale(1.5);
      }
    }
  }

  .container {
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: white;
      padding-bottom: 2rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      flex: 11;
    }
    .products {
      padding: 12px;
      background: #0000001a;
      /* max-width:100%; */
    }
    .delete {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      span {
        cursor: pointer;
      }
    }
    .left-side {
      .bottom {
        .item {
          display: flex;
          flex-direction: row;
          color: #fff;
          gap: 0 1rem;
          flex-wrap: wrap;
          h3 {
            font-size: 14px;
          }
          img {
            max-width: 150px;
            padding: 10px;
            aspect-ratio: 1 / 1;
          }
        }
      }
    }
    .right-side {
      flex: 1;

      .content {
        max-width: 382px;
        margin: auto;
        min-width: 280px;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: #0000001a;
        padding: 1.8rem;
        border-radius: 8px;
      }
      .inf-1 {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media (min-width: 1300px) {
    .container {
      width: 1250px;
      margin: auto;
    }
  }
  @media (max-width: 540px) {
    .delete {
      width: 100%;
    }
  }
`;

export default Cart;
