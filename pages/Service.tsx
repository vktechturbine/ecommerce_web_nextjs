import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import "../styles/service.css"

const Service = () => {
  return (
    <div className="service">
      <div className="service__header">
        <Header />
      </div>
      <div className="service__content">
        <div className="service__first__content  pt-4">
          <div className="first_text ">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
          </div>
          <h1 className="mb-2 mt-4">Explore Our Services</h1>
        </div>
        <div className="service__second__content display flex w-[100%] pt-6">
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <FontAwesomeIcon icon={faUserTie} className="text-[3em] icon" />
            <h5  className="service__card__h5">Master Chefs</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <RestaurantIcon className="text-[3em] icon" />
            <h5 className="service__card__h5">Quality Food</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <AddShoppingCartIcon className="text-[3em] icon" />
            <h5 className="service__card__h5">Online Order</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <HeadsetMicIcon className="text-[3em] icon" />
            <h5 className="service__card__h5">24/7 Service</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <FontAwesomeIcon icon={faUserTie} className="text-[3em] icon" />
            <h5  className="service__card__h5">Master Chefs</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <RestaurantIcon className="text-[3em] icon" />
            <h5 className="service__card__h5">Quality Food</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <AddShoppingCartIcon className="text-[3em] icon" />
            <h5 className="service__card__h5">Online Order</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          <div className="service__card w-[20%] h-60 bg-white border-orange-600 rounded mr-8 mb-8 ml-10">
            <HeadsetMicIcon className="text-[3em] icon" />
            <h5 className="service__card__h5">24/7 Service</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
        </div>
      </div>
      <div className="service__footer">
        <Footer />
      </div>

    </div>
  );
}

export default Service;
