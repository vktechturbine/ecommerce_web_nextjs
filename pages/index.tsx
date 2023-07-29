"use client";
import About from './About'
import Headers from './Header'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Footer from './Footer';
import 'swiper/css';
import "../styles/homePage.css";
import "tailwindcss/tailwind.css";
const HomePage = () => {
  const slides = [
    { url: "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg" },
    { url: "https://cdn.pixabay.com/photo/2016/12/17/18/51/spices-1914130_1280.jpg" },
    { url: "https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg" },
    { url: "https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_640.jpg" }
  ];
  return (
    <div className="main-container">
      <div className="header">
        <Headers />
      </div>

      <div className="swipe">
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {slides.map(slide => (
            <SwiperSlide> <Image className="sliderImage" style={{ width: "100%", height: "596px" }} src={slide.url} width={0} height={0} sizes="100vw" alt="image" /></SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="index__footer">
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
