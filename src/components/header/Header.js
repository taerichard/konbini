import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../styles/appStyles.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const slider = () => {
    return (
      <nav className="sidenav">
        <Link
          className="sidenav-item"
          to="about-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          About
        </Link>
        <Link
          className="sidenav-item"
          to="products-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Products
        </Link>
        <Link
          className="sidenav-item"
          to="services-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Services
        </Link>
        <Link
          className="sidenav-item"
          to="contact-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Contact
        </Link>
      </nav>
    );
  };

  const largeNav = () => {
    return (
      <nav className="largenav">
        <Link
          activeClass="active"
          className="largenav-item"
          to="about-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="largenav-item"
          to="products-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Products
        </Link>
        <Link
          activeClass="active"
          className="largenav-item"
          to="services-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Services
        </Link>
        <Link
          activeClass="active"
          className="largenav-item"
          to="contact-wrapper"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Contact
        </Link>
      </nav>
    );
  };

  return (
    <header className="nav" onClick={() => setIsOpen(!isOpen)}>
      <h1 className="nav-konbini">Konbini</h1>
      <p className="sidebar-menu" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </p>
      <p className="sidebar-menu" onClick={() => setIsOpen(!isOpen)}></p>
      {isOpen && slider()}
      {largeNav()}
    </header>
  );
};

export default Header;
