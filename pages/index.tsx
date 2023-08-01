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
    { url: "https://img.freepik.com/free-vector/background-with-different-meals_23-2147871165.jpg?size=626&ext=jpg&ga=GA1.1.1212338543.1689843878&semt=ais" },
    { url: "https://img.freepik.com/free-photo/various-vegetables-black-table-with-space-message_1220-616.jpg?w=996&t=st=1690803228~exp=1690803828~hmac=0aef0f251ebdd02dc487e0ce03673b0d892e2c8eba18d88f87ba98879acd3a1a" },
    { url: "https://img.freepik.com/free-photo/top-view-yummy-cutlets-with-onion-rings-grey-background-meal-photo-dish-meat_140725-47088.jpg?t=st=1690803321~exp=1690803921~hmac=3fc42aa20a8573979c737c74dac56755a1e873c7ccb976bcf982455b88ce23b0" },
    { url: "https://img.freepik.com/premium-photo/salad-arugula-prosciutto-strawberries-capers-black-stone-plate-italian-cuisine_187166-49342.jpg?w=996" }
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
