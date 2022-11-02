import React from "react";
import JapaneseTitle from "../../components/shared/JapaneseTitle";
import { useLocation } from "react-router-dom";
// import austinImg from "../resources/images/austin/art.jpg";
import "../styles/modsStyles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// style the products like the link
// https://minimalissimo.com/

export default function Mods() {
  let location = useLocation();
  const { productsData } = location.state;
  console.log(location);

  return (
    <div className="mods-container">
      <Link to="/" className="mods-title">
        <h1>Konbini</h1>
      </Link>
      {/* <JapaneseTitle /> */}

      {/* <div className="mods-titleImg">
        <img src={austinImg} />
      </div> */}
      <h1 className="mods-title">Mods</h1>
      <div className="mods-cards">
        {productsData.map((item, index) => {
          return (
            <div className="mods-card">
              <div className="mods-img">
                <img src={item.img} />
              </div>
              <p className="mods-name">{item.title}</p>
              <p className="mods-price">{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
