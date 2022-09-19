import React, { useState, useRef } from "react";
import "./headerStyles.css";
import { Link, NavLink } from "react-router-dom";

const largeNav = (
  <div className="large-nav-container">
    <nav className="large-nav-items">
      <li className="large-nav-item">About</li>
      <li className="large-nav-item">Products</li>
      <li className="large-nav-item">Contact</li>
    </nav>
  </div>
);

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <header className="header">
        <div className="header-logo-container">
          <h1 classNameName="header-logo">konbini</h1>
        </div>
        <div className="header-nav">
          <span onClick={showSideBar} className="header-nav-menu">
            menu
          </span>
          <nav className={sidebar ? "header-sidebar-active" : "header-sidebar"}>
            <ul className="header-sidebar-list" onClick={showSideBar}>
              <li className="header-nav-item">About</li>
              <li className="header-nav-item">Products</li>
              <li className="header-nav-item">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
