import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/topher3.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="topher__navbar">
      <div className="topher__navbar-links">
        <div className="topher__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="topher__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wtopher">What is Topher?</a></p>
          <p><a href="#possibility">Coffee NoteBook</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="topher__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="topher__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="topher__navbar-menu_container scale-up-center">
          <div className="topher__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wtopher">What is Topher?</a></p>
            <p><a href="#possibility">Coffee NoteBookx</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="topher__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;