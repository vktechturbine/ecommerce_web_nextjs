"use client";
import About from '../../pages/About'
import Headers from '../../pages/Headers'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import "../../styles/homePage.css"

export default function Home() {
  const slides = [
    { url: "https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg" },
    { url: "https://cdn.pixabay.com/photo/2016/12/17/18/51/spices-1914130_1280.jpg" },
    { url: "https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_1280.jpg" },
    { url: "https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_640.jpg" }
  ];
  return (
    <div>
      <Headers />

      <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {slides.map(slide => (
          <SwiperSlide> <Image className="sliderImage" style={{width:"80%" ,height:"800px"}} src={slide.url} width={0} height={0} sizes="100vw" alt="image" /></SwiperSlide>


        ))}
      </Swiper>
    </div>
  )
}
