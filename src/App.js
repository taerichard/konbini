import "./styles/appStyles.css";
import Form from "./components/contact/Form";
import Footer from "./components/Footer";
import Products from "./components/products/Products";
import service1 from "./resources/images/services/services1.jpg";
import service2 from "./resources/images/services/services2.jpg";
import service3 from "./resources/images/services/services3.jpg";
import Header from "./components/header/Header.js";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="title">
        <Title />
      </div>

      <div>
        <Products />
      </div>

      {/* <div className="services">
        <h2 className="services-title">Services</h2>

        <div className="services-container">
          <div className="services-item">
            <div className="services-image">
              <img src={service1} />
            </div>
            <p>Austin residents can request same day deliveries.</p>
          </div>

          <div className="services-item">
            <div className="services-image">
              <img src={service2} />
            </div>
            <p>We ship orders out of state, 3 days guaranteed</p>
          </div>

          <div className="services-item">
            <div className="services-image">
              <img src={service3} />
            </div>
            <p>Subscribed members receives 10% off.</p>
          </div>
        </div>
      </div> */}
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
