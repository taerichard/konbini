import Title from "../components/Title";
import Services from "../components/services/Services";
import Products from "../components/products/Products";
import Form from "../components/contact/Form";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import React, { useState } from "react";
import { data } from "../resources/data/data";
console.log(data);

const Main = () => {
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
    <div>
      <header className="nav">
        <h1 className="nav-konbini">Konbini</h1>
        <p className="sidebar-menu" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </p>
        {isOpen && slider()}
        {largeNav()}
      </header>
      <div onClick={() => setIsOpen(false)}>
        <div id="about-wrapper">
          <Title />
        </div>
        <div id="products-wrapper">
          <Products />
        </div>
        <div id="services-wrapper">
          <Services />
        </div>
        <div id="contact-wrapper">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Main;
