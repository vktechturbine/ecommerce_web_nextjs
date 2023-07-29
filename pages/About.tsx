import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/about.css"
import Image from 'next/image';
const About = () => {
  return (
    <div>
      <div className="about__header">
        <Header />
      </div>

      <div className="about__body pt-16 pb-2">
        <div className="about__body__content1">
          <div className="about__body__content1__images">
            <div className="about__image__content1"><Image src="https://themewagon.github.io/restoran/img/about-1.jpg" className="w-[100%] h-[100%] image1" width={300} height={10} alt='mages' /></div>
            <div className="about__image__content1"><Image src="https://themewagon.github.io/restoran/img/about-2.jpg" className="w-[100%] h-[100%] image2" width={300} height={10} alt='mages' /></div>
            <div className="about__image__content1"><Image src="https://themewagon.github.io/restoran/img/about-3.jpg" className="w-[100%] h-[100%] image3" width={300} height={10} alt='mages' /></div>
            <div className="about__image__content1"><Image src="https://themewagon.github.io/restoran/img/about-4.jpg" className="w-[100%] h-[100%] image4" width={300} height={10} alt='mages' /></div>
          </div>
          <div className="about__body__content1__text">
            <h5>About Us</h5>
            <h1 className="mb-4">Welcome to Restoran</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
           
            <div className="about__body__content1__count">
              <div className="about__body__content1__count1">
                <div className="about__body__content1__count__content">
                  <h1 className="w-[20%]">15</h1>
                  <div className="w-[80%]  about__body__content1__count__content__p">
                    <p className="">Years of</p>
                    <h6 className="">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="about__body__content1__count2">
                <div className="about__body__content1__count__content">
                  <h1 className="w-[20%]">50</h1>
                  <div className="w-[80%]  about__body__content1__count__content__p">
                    <p className="">Popular</p>
                    <h6 className="">Master Chefs</h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="about__body__content2"></div>
      </div>

      <div className="about__footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
