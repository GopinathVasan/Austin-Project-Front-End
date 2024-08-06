import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';
import Dropdown from './Dropdown';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='NavbarItems'>
      <h1 className="navbar-logo"> Austin Partnership's </h1>
        <div className='menu-icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <i className='fa-solid fa-house-user' />
              Home
            </Link>
          </li>
          <li
            className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa-solid fa-circle-info' />
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa-solid fa-briefcase' />
              Service
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/OurPeople'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa-solid fa-users' />
              Our People
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa-solid fa-address-book' />
              Login
            </Link>
          </li>
          {/* <li className='nav-links'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <i className='fa-solid fa-address-book' />
              Login
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
