import React from "react";
import "./servicesStyles.css";
import service1 from "../../resources/images/services/services1.jpg";
import service2 from "../../resources/images/services/services2.jpg";
import service3 from "../../resources/images/services/services3.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Services</h2>
      <div className="services">
        <div className="services-image services-1">
          <img src={service1} />
          <p>Austin residents can request same day deliveries.</p>
        </div>

        <div className="services-image services-2">
          <img src={service2} />
          <p>We ship orders out of state, 3 days guaranteed</p>
        </div>

        <div className="services-image services-3">
          <img src={service3} />
          <p>Subscribed members receives 10% off.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
