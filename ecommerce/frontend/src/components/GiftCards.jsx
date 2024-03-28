import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const GiftCards = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef();
  useEffect(() => {
    console.log(document.location.pathname);
    if(document.location.pathname === "/"){
       window.addEventListener("resize", (e) => {
      
    
      setSliderWidth(
        sliderRef?.current?.scrollWidth - sliderRef?.current?.offsetWidth
      );
    });
    setSliderWidth(
      sliderRef?.current?.scrollWidth - sliderRef?.current?.offsetWidth
    );
    }
   
  }, [sliderRef]);
  return (
    <div className="playstation">
      <div className="title">
        <h4>Gaming Gift Cards</h4>
      </div>
      <motion.div
        ref={sliderRef}
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        className="playstation-slider"
      >
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3292?categoryId=3292&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Consoles </h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3293?categoryId=3293&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Consoles </h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3294?categoryId=3294&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Consoles </h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3300?categoryId=3300&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Consoles </h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3307?categoryId=3307&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Consoles </h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3308?categoryId=3308&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Accessories</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3310?categoryId=3310&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Nintendo Switch Gamess</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3317?categoryId=3317&type=0&width=305&fileFormat=1"
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

export default GiftCards;
