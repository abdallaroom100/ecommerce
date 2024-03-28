import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Psn from "./Psn";
import PlayStation from "./PlayStation";
import Nintendo from "./Nintendo";
import GiftCards from "./GiftCards";
import Footer from "./Footer";
const BestSeller = () => {
  let bestSliderRef = useRef();
  const [endOfSlider, setEndOfSlider] = useState(0);

  useEffect(() => {
    window.onresize = (e) => {
      setEndOfSlider(
        bestSliderRef?.current?.scrollWidth - bestSliderRef?.current?.offsetWidth
      );
    };

    setEndOfSlider(
      bestSliderRef?.current?.scrollWidth - bestSliderRef?.current?.offsetWidth
    );
  }, [bestSliderRef]);

  return (
    <div className="bestSeller">
      <div className="container">
        <div className="title">
          <h4>Best Seller</h4>
        </div>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -endOfSlider }}
          ref={bestSliderRef}
          className="bestSlider"
        >
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/92727?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>Pokemon Trading Card Booster - 10 Cards (Single Pack)</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/84098?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>EA SPORTS FC 24 - Arabic and English - PS5</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/80147?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>Marvel's Spider Man 2 - Arabic and English - PS5</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/83718?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>God of War - PS4 - Used</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/40210?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>
                  Uncharted 4: A Thief's End (Arabic and English) - PS4 - Used
                </p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/27868?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>GTA 5: Grand Theft Auto V - PS4 - Used</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/77973?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>The Last of Us Remastered - PS4 - Used</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/42669?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>
                  Marvel’s Spider Man: Miles Morales - PS5 - Arabic & English -
                  Used
                </p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/92742?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>Pokemon Trading Card Booster - 30 Cards (Single Pack)</p>
              </div>
            </Link>
          </motion.div>
          <motion.div className="bestSlide">
            <Link>
              <img
                src="https://www.games2egypt.com/Images/Products/85462?fileFormat=1&height=400"
                alt=""
              />
              <div className="desc">
                <p>Assassin's Creed Mirage - Arabic - PS5 - Used</p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
        <div className="land-2">
          <div className="img-1">
            <img
              src="https://www.games2egypt.com/Images/Banners/167?&width=613&fileFormat=1"
              alt=""
            />
          </div>
          <div className="img-2">
            <img
              src="https://www.games2egypt.com/Images/Banners/170?&width=613&fileFormat=1"
              alt=""
            />
          </div>
        </div>
        <Psn />
        <PlayStation />
        <Nintendo />
        <GiftCards />
        <div className="title">
          <h4>Keyboard, Mouse And Headsets</h4>
        </div>
        <div className="land-3">
          <div className="img-1">
            <img
              src="https://www.games2egypt.com/Images/Categories/3313?categoryId=3313&type=0&width=610&fileFormat=1"
              alt=""
            />
          </div>
          <div className="img-2">
            <img
              src="https://www.games2egypt.com/Images/Categories/3315?categoryId=3315&type=0&width=610&fileFormat=1"
              alt=""
            />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default BestSeller;
