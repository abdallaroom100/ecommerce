import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Nintendo = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef();
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setSliderWidth(
        sliderRef?.current?.scrollWidth - sliderRef?.current?.offsetWidth
      );
    });
    setSliderWidth(
      sliderRef?.current?.scrollWidth - sliderRef?.current?.offsetWidth
    );
  }, [sliderRef]);
  return (
    <div className="playstation">
      <div className="title">
        <h4>Nintendo</h4>
      </div>
      <motion.div
        ref={sliderRef}
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        className="playstation-slider"
      >
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3312?categoryId=3312&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Consoles </h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/2249?categoryId=2249&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Accessories</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/2250?categoryId=2250&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Gamess</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/2251?categoryId=2251&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo E-Shop</h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Nintendo;
