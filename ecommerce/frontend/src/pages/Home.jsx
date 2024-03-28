import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cards";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import BestSeller from "../components/BestSeller";
import Menu from "../components/Menu";
import MediaQuery from "react-responsive";
import Footer from "../components/Footer";
const Home = () => {
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      <MediaQuery minWidth={991}></MediaQuery>;
    });
  }, [window.onresize]);
  return (
    <div>
      <MediaQuery maxWidth={991}>
        {document.body.classList.toggle("stop-scroll")}
        <Menu />
      </MediaQuery>

      <div className="home">
        <Slider />
        <BestSeller />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
