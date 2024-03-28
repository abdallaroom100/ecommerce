import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import MediaQuery from "react-responsive";

const Slider = () => {
  //   const progressCircle = useRef(null);
  //   const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   };

  return (
    <div className="slider">
      <div className="container">
        <MediaQuery maxWidth={990}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="swiper"
          >
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/145?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/140?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/139?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/128?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/132?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/126?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/127?lang=en&fileFormat=1&width=450&height=450&device=mobile" />
            </SwiperSlide>
          </Swiper>
        </MediaQuery>
        <MediaQuery minWidth={991}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/145?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/140?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/139?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-visible">
              <img src="https://www.games2egypt.com/Images/Slides/128?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/132?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/126?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.games2egypt.com/Images/Slides/127?lang=en&fileFormat=1&width=900" />
            </SwiperSlide>
          </Swiper>
          <div className="advertise">
            <img
              src="https://www.games2egypt.com/Images/Banners/177?&width=287&fileFormat=1"
              alt=""
            />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Slider;
