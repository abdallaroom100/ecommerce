import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { listItems } from "../data/listData";
import { menuClick } from "../functions/menuFunctions";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRoutes";
const Menu = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(undefined);
  const { user, state } = useSelector(({ user }) => user);

  useEffect(() => {}, [state]);
  return (
    <div className="mobile-menu">
      <div className="menu-container">
        <div className="exit">
          <img
            src="https://www.games2egypt.com/Images/Regions/1/1?fileFormat=1&width=191"
            alt=""
          />
          <HiXMark onClick={menuClick} />
        </div>
        {state === false ? (
          ""
        ) : (
          <div className="user-welcome">
            <h2 style={{ color: "white" }}>
              welcome <span style={{ color: "#95ab52" }}>{user?.name}</span>
            </h2>
          </div>
        )}
        <div className="menu-sign">
          <span onClick={menuClick}>
            {state === false ? (
              <Link onClick={() => {}} to="/login">
                SIGN IN
              </Link>
            ) : (
              <Link
                onClick={() => {
                  dispatch(logout());
                }}
                to="/login"
              >
                LOG OUT
              </Link>
            )}
          </span>
          {state === false ? (
            <span onClick={menuClick}>
              <Link to="register">Register</Link> if you dont have an account
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="mobileMenuList">
          {listItems.map((item, index) => {
            const handleItemClick = (e) => {
              // Prevent the event from bubbling up to the parent
              e.stopPropagation();
              // Toggle selection state or perform other actions
              // setSelected(index);
            };
            const currentItem = useRef();
            return (
              <div
                ref={currentItem}
                className={`item ${selected === index ? "selected" : ""}`}
                onClick={() =>
                  setSelected((prev) => (prev === index ? "" : index))
                }
              >
                <div className="itemTitle">
                  <h4 className="ListName">{item.title}</h4>
                  <button className="showListOFItem">
                    <MdOutlineKeyboardArrowDown />
                  </button>
                </div>
                <ul className="itemsList">
                  {item.items.map((ele, index) => (
                    <li key={index} onClick={handleItemClick}>
                      {ele}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
