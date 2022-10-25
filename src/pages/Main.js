import Title from "../components/Title";
import Services from "../components/services/Services";
import Products from "../components/products/Products";
import Form from "../components/contact/Form";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div>
      <div>
        <header className="nav">
          <nav className="nav-items">
            <Link
              className="nav-item"
              to="about-wrapper"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              About
            </Link>
            <Link
              className="nav-item"
              to="products-wrapper"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Products
            </Link>
            <Link
              className="nav-item"
              to="services-wrapper"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Services
            </Link>
            <Link
              className="nav-item"
              to="contact-wrapper"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              Contact
            </Link>
          </nav>
        </header>
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
