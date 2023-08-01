import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/menu.css";
const Menu = () => {
  return (
    <div>
      <div className="menu__header">
        <Header />
      </div>
      <div className="menu__body">
        <div className="menu__body__section1">
          <h5>Food Menu</h5>
          <h1>Most Popular Items</h1>
        </div>
        <div className="menu__body__section2"></div>
      </div>
      <div className="menu__footer">
        <Footer />
      </div>

    </div>
  );
}

export default Menu;
