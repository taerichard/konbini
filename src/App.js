import "./styles/appStyles.css";
import Form from "./components/contact/Form";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";

import Header from "./components/header/Header.js";
import Title from "./components/Title";
import Services from "./components/services/Services";

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
      <div>
        <Services />
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
