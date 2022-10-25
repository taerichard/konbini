import "./styles/appStyles.css";
import Footer from "./components/footer/Footer";
import { Routes, Route, useRoutes } from "react-router-dom";
import Main from "./pages/Main";
import Accessories from "./pages/Accessories";
import Disposables from "./pages/Disposables";
import Ecigs from "./pages/Ecigs";
import Juice from "./pages/Juice";
import Mods from "./pages/Mods";
import Pods from "./pages/Pods";
import Title from "./components/Title";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import Form from "./components/contact/Form";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="container">
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

      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="accessories" element={<Accessories />} />
        <Route path="disposables" element={<Disposables />} />
        <Route path="ecigs" element={<Ecigs />} />
        <Route path="juice" element={<Juice />} />
        <Route path="mods" element={<Mods />} />
        <Route path="pods" element={<Pods />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
