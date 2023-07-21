import React from 'react';
import '../styles/homePage.css';
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <MenuIcon className="header__logo_menuIcon"/>
        <Image src="/Kokan_Aswad.png" width={250} height={250} className="img object-contain" alt="Restaurant_logo" />
      </div>
      <div className="options">
        <div className='opt'>
          <HomeIcon className="opt__icon"/>
          <h4>Home</h4>
        </div>
        <div className='opt'>
          <PersonIcon className="opt__icon"/>
          <h4>Login</h4>
        </div>
        <div className='opt'>
          <GroupsIcon className="opt__icon"/>
          <h4>About Us</h4>
        </div>
        <div className='opt'>
          <ContactsIcon className="opt__icon"/>
          <h4>Contact</h4>
        </div>
      </div>

    </div>
  );
}

export default Header;
