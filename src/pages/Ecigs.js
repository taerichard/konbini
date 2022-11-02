import React from "react";
import { useLocation } from "react-router-dom";
import JapaneseTitle from "../components/shared/JapaneseTitle";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/modsStyles.css";

export default function Ecigs() {
  const { productsData } = useLocation();

  return (
    <div className="mods-container">
      <Link to="/" className="mods-title">
        <h1>Konbini</h1>
      </Link>
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
