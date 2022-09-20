import React from "react";
import "./productsStyles.css";
import bombImage from "../../resources/images/products/bomb.jpg";
import gentleManImage from "../../resources/images/products/gentlemen.jpg";
import man from "../../resources/images/products/man.jpg";
import manBun from "../../resources/images/products/manBun.jpg";
import smooth from "../../resources/images/products/smooth.jpg";
import train from "../../resources/images/products/train.jpg";
import weird from "../../resources/images/products/weird.jpg";
import image9 from "../../resources/images/products/asian.jpg";

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <div className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img className="gallery__img" src={bombImage} alt="japanese food" />
          <p>Mods</p>
          <div class="gallery__overlay"></div>
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img className="gallery__img" src={manBun} alt="japanese food" />
          <p>ECigs</p>
          <div class="gallery__overlay"></div>
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img className="gallery__img" src={man} alt="japanese food" />
          <p>Pods</p>
          <div class="gallery__overlay"></div>
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img
            className="gallery__img"
            src={gentleManImage}
            alt="japanese food"
          />
          <p>Juice</p>
          <div class="gallery__overlay"></div>
        </figure>

        <figure className="gallery__item gallery__item--5">
          <img className="gallery__img" src={smooth} alt="japanese food" />
          <p>Disposables</p>
          <div class="gallery__overlay"></div>
        </figure>

        <figure className="gallery__item gallery__item--6">
          <img className="gallery__img" src={weird} alt="japanese food" />
          <p>Accessories</p>
          <div class="gallery__overlay"></div>
        </figure>
      </div>
    </div>
  );
};

export default Products;
