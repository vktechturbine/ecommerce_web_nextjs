"use client";
import React, { useEffect, useState } from 'react';
import '../styles/homePage.css';
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useRouter } from 'next/router';
import "tailwindcss/tailwind.css";

const Header = () => {
  const router = useRouter();
  const [isCheck, setCheck] = useState(false);



  if (typeof window !== "undefined") {

    window.addEventListener('resize', function (event) {
      if (window.screen.availWidth >= 960) {
        setCheck(false);
      }
      console.log(isCheck);

    }, false);
  }



  return (
    <div className="header">
      <div className="header__logo">

        <div className="drawer">
          <input id="my-drawer" type="checkbox" className={isCheck ? "drawer-toggle" : "drawer-togle"} />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" onClick={() => setCheck(true)} className="drawer-button"> <MenuIcon className="header__logo_menuIcon" /></label>

          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <div className="opt" onClick={() => router.push('/')}>
                  <HomeIcon className="opt__icon" />
                  <h4>Home</h4>
                </div>
              </li>
              <li>
                <div className="opt" onClick={() => router.push('/About')}>
                  <GroupsIcon className="opt__icon" />
                  <h4>About Us</h4>
                </div>
              </li>
              <li>
                <div className="opt" onClick={() => router.push('/Service')}>
                  <RoomServiceIcon className="opt__icon" />
                  <h4>Service</h4>
                </div>
              </li>
              <li>
                <div className="opt" onClick={() => router.push('/Menu')}>
                  <RestaurantMenuIcon className="opt__icon" />
                  <h4>Menu</h4>
                </div>
              </li>
              <li>
                <div className="opt" onClick={() => router.push('/Login')}>
                  <PersonIcon className="opt__icon" />
                  <h4>Login</h4>
                </div>
              </li>
              <li>
                <div className="opt" onClick={() => router.push('/Contact')}>
                  <ContactsIcon className="opt__icon" />
                  <h4>Contact</h4>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <Image src="/Kokan_Aswad.png" width={250} height={250} className="img object-contain" alt="Restaurant_logo" />
      </div>
      <div className="options">
        <div className="opt" onClick={() => router.push('/')}>
          <HomeIcon className="opt__icon" />
          <h4>Home</h4>
        </div>
        <div className="opt" onClick={() => router.push('/About')}>
          <GroupsIcon className="opt__icon" />
          <h4>About Us</h4>
        </div>
        <div className="opt" onClick={() => router.push('/Service')}>
          <RoomServiceIcon className="opt__icon" />
          <h4>Service</h4>
        </div>
        <div className="opt" onClick={() => router.push('/Menu')}>
          <RestaurantMenuIcon className="opt__icon" />
          <h4>Menu</h4>
        </div>
        <div className="opt" onClick={() => router.push('/Login')}>
          <PersonIcon className="opt__icon" />
          <h4>Login</h4>
        </div>
        <div className="opt" onClick={() => router.push('/Contact')}>
          <ContactsIcon className="opt__icon" />
          <h4>Contact</h4>
        </div>
      </div>

    </div>
  );
}

export default Header;
