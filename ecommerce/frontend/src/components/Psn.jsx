import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const Psn = () => {
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
    <div className="psn">
      <div className="title">
        <h4>Best Seller In Playstation Network (PSN)</h4>
      </div>
      <motion.div
        ref={sliderRef}
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        className="psn-slider"
      >
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39595?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN PlayStation Store Gift Card $50 (USA)</p>
            <span>PSN USA Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39564?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN PlayStation Store Gift Card $50 (USA)</p>
            <span>PSN UAE Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39596?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN PlayStation Store Gift Card $50 (USA)</p>
            <span>PSN USA Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39598?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN PlayStation Store Gift Card $50 (USA)</p>
            <span>PSN USA Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39565?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN PlayStation Store Gift Card $50 (USA)</p>
            <span>PSN USA Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39651?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN 20 Card UAE</p>
            <span>PSN UAE Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39568?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN 20 Card UAE</p>
            <span>PSN UAE Store</span>
          </div>
        </motion.div>
        <motion.div className="psn-slide">
          <img
            src="https://www.games2egypt.com/Images/Products/39601?fileFormat=1&height=225"
            alt=""
          />
          <div className="desc">
            <p>PSN 20 Card UAE</p>
            <span>PSN UAE Store</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Psn;
