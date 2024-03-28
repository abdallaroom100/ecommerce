import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { BiUser, BiStore, BiSearch } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";

import MediaQuery from "react-responsive";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user, state } = useSelector(({ user }) => user);
  const history = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const menuShow = () => {
    document.querySelector(".home")?.classList?.toggle("hide");

    document.querySelector(".mobile-menu").classList.toggle("select");
    document.body.classList.toggle("stop-scroll");
  };
  useEffect(() => {}, [user]);

  return (
    <div className="navbar">
      <div className="container">
        <MediaQuery minWidth={991}>
          <div className="logo">
            <Link to="/">
              <img
                src="https://www.games2egypt.com/Images/Regions/1/1?fileFormat=1&width=191"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search">
            <input
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              type="text"
              placeholder="search"
            />
            <button
              onClick={() => {
                {
                  searchKey && history(`/search/${searchKey}`);
                }
              }}
            >
              <BiSearch
                onClick={() => {
                  console.log("object");
                }}
              />
            </button>
          </div>
          <div className="links">
            <ul>
              <li
                onClick={() => {
                  history("/login");
                }}
                className="sign-in"
              >
                <img
                  src="https://www.games2egypt.com/web/img/profile.png"
                  alt="profile"
                />
                {state === false
                  ? "sign in"
                  : state === true
                  ? `${user.name}`
                  : ""}
              </li>
              {state === false ? (
                ""
              ) : (
                <li onClick={() => history("/cart")}>
                  <BiStore onClick={() => history("/cart")} />
                </li>
              )}
            </ul>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={990}>
          <div className="menu">
            <img
              onClick={menuShow}
              src="https://www.games2egypt.com/Web/img/burger_menu_icon.webp"
              alt=""
            />
          </div>
          <div className="logo">
            <Link to="/">
              <img
                src="https://www.games2egypt.com/Images/Regions/1/1?fileFormat=1&width=191"
                alt="logo"
              />
            </Link>
          </div>
          <div className="links">
            <ul>
              {/* <li className="sign-in">
                  <img
                    src="https://www.games2egypt.com/web/img/profile.png"
                    alt="profile"
                  />
                  sign in
                </li> */}
              <li onClick={() => history("/cart")}>
                <BiStore />
              </li>
            </ul>
          </div>
        </MediaQuery>
      </div>

      <MediaQuery maxWidth={990}>
        <div style={{ marginTop: "15px", width: "90%  " }} className="search">
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="search"
          />
          <button
            onClick={() => {
              {
                searchKey && history(`/search/${searchKey}`);
              }
            }}
          >
            <BiSearch />
          </button>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={991}>
        <div className="main-nav">
          <div className="container">
            <ul className="menu">
              <li>
                <span>Video game</span> <GoChevronDown />
                <div className="items">
                  <ul>
                    <li>plyastation 5</li>
                    <li>playstation 4</li>
                    <li>xbox</li>
                    <li>pc games</li>
                    <li>pre orderd</li>
                  </ul>
                </div>
              </li>
              <li>
                <span>Console & hardware</span> <GoChevronDown />
                <div className="items">
                  <ul>
                    <li>plyastation 5 console</li>
                    <li>playstation 4 console</li>
                    <li>xbox console</li>
                    <li>virtual Reality</li>
                    <li>pre- Owned</li>
                  </ul>
                </div>
              </li>
              <li>
                <span>Accessories</span> <GoChevronDown />
                <div className="items">
                  <ul>
                    <li>PlayStation 5 Accessories</li>
                    <li>PlayStation 4 Accessories</li>
                    <li>Nintendo Accessories</li>
                    <li>Controllers</li>
                    <li>Thumb Grips</li>
                    <li>Gaming Headsets</li>
                    <li>Gaming Chairs</li>
                    <li>Keyboard & Mouse</li>
                    <li>Memory Storage Devices</li>
                    <li>Posters</li>
                    <li>Cables & Chargers</li>
                    <li>Keychains</li>
                  </ul>
                </div>
              </li>
              <li>
                <span>Pre-Owned</span> <GoChevronDown />
                <div className="items">
                  <ul>
                    <li>Used Consoles And Accessories</li>
                    <li>PlayStation 5 Used Games</li>
                    <li>PlayStation 4 Used Games</li>
                    <li>Nintendo Switch Used Games</li>
                    <li>Xbox Used Games</li>
                  </ul>
                </div>
              </li>
              <li className="mega-menu">
                <span>digital-products</span> <GoChevronDown />
                <div className="mega-items">
                  <ul>
                    <h3 className="title">PlayStation Plus</h3>
                    <li>PSN USA Store</li>
                    <li>PSN UAE Store</li>
                    <li>PSN UK Store</li>
                    <li>PSN Brazil Store</li>
                    <li>PSN France Store</li>
                    <li>PSN Canada Store</li>
                    <li>PSN Canada Store</li>
                    <li>PSN KSA Store</li>
                    <li>PSN Qatar Store</li>
                    <li>PSN Bahrain Store</li>
                    <li>PSN Kuwait Store</li>
                    <li>Xbox Oman Games</li>
                    <li>Xbox Lebanon Games</li>
                  </ul>
                  <ul>
                    <h3 className="title">Gift Cards</h3>
                    <li>Valorant Gift Card</li>
                    <li>PUBG Gift Card</li>
                    <li>Fortnite Gift Card</li>
                    <li>Fifa Points</li>
                    <li>Apex Gift Cards</li>
                    <li>League of Legends(LOL)</li>
                    <li>Razer Gift Cards</li>
                    <li>ROBLOX Gift Cards</li>
                    <li>Razer Gold Gift Cards</li>
                    <li>OBuck Gift Cards</li>
                    <li>Free Fire</li>
                  </ul>
                  <ul>
                    <h3 className="title">PC Digital Products</h3>
                    <li>PC Digital Games</li>
                    <li>PC Software</li>
                    <li>Steam Gift Cards</li>

                    <ul>
                      <h3 className="title">Apple ITunes Gift Cards</h3>
                      <li>Apple iTunes UK</li>
                      <li>Apple iTunes UK</li>
                    </ul>
                    <ul>
                      <h3 className="title">Google Play Gift Cards</h3>
                      <li>Google Play USA</li>
                      <li>Google Play UK</li>
                    </ul>
                  </ul>
                  <ul>
                    <h3 className="title">Xbox</h3>
                    <li>Xbox Subscriptions & Gift Cards</li>
                    <li>Xbox Digital Games</li>

                    <ul>
                      <h3 className="title">Nintendo Digital Products</h3>
                      <li>Nintendo eShop Gift Cards</li>
                      <li>Switch Digital Games</li>
                    </ul>
                  </ul>
                </div>
              </li>
              <li>
                <span>Toys & Collectibles</span> <GoChevronDown />
                <div className="items">
                  <ul>
                    <li>Used Consoles And Accessories</li>
                    <li>PlayStation 5 Used Games</li>
                    <li>PlayStation 4 Used Games</li>
                    <li>Nintendo Switch Used Games</li>
                    <li>Xbox Used Games</li>
                  </ul>
                </div>
              </li>
              <li>
                <span>Offers</span>
              </li>
              <li>
                <span>Contact Us</span>
              </li>
              <li>
                <span>News</span>
              </li>
            </ul>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navbar;
