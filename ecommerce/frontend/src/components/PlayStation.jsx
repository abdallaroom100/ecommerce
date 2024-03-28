import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const PlayStation = () => {
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
        <h4>PlayStation 5 & Xbox Series X|S</h4>
      </div>
      <motion.div
        ref={sliderRef}
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        className="playstation-slider"
      >
           <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/2230?categoryId=2230&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Xbox consoles</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3289?categoryId=3289&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>PS5 consoles</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3286?categoryId=3286&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>PS5 Accessories</h4>
          </div>
        </motion.div>
        <motion.div className="playstation-slide">
          <img
            src="https://www.games2egypt.com/Images/Categories/3323?categoryId=3323&type=0&width=305&fileFormat=1"
            alt=""
          />
          <div className="name">
            <h4>Xbox Accessories</h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PlayStation;
