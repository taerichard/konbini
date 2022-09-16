import "./styles/appStyles.css";
import Form from "./components/contact/Form";
import Footer from "./components/Footer";
import Gallery from "./components/products/Gallery";
import service1 from "./resources/images/services/services1.jpg";
import service2 from "./resources/images/services/services2.jpg";
import service3 from "./resources/images/services/services3.jpg";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-logo-container">
          <h1 classNameName="header-logo">konbini</h1>
        </div>
        <div className="header-nav-container">
          <nav className="header-nav-items">
            <li className="header-nav-item">About</li>
            <li className="header-nav-item">Products</li>
            <li className="header-nav-item">Contact</li>
          </nav>
        </div>
      </header>

      <div className="title">
        <div className="title-container-1">
          <h2>べイプって</h2>
        </div>
        <div className="title-container-2">
          <p className="title-container-2-bio">
            Based in the beautiful Austin, Texas. We sell vape products and
            accessories made from the US and Japan only. It is our pleasure to
            serve you.
          </p>
        </div>
      </div>
      <div className="products">
        <Gallery />
      </div>
      <div className="services">
        <h2 className="services-title">Services</h2>
        <div className="services-container">
          <div className="services-item">
            <img src={service1} width="100" height="100" />
            <p>Austin residents can request same day deliveries.</p>
          </div>
          <div className="services-item">
            <img src={service2} width="100" height="100" />
            <p>We ship orders out of state, 3 days guaranteed</p>
          </div>
          <div className="services-item">
            <img src={service3} width="100" height="100" />
            <p>Subscribed members receives 10% off.</p>
          </div>
        </div>
      </div>
      <div className="contact">
        <Form />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
