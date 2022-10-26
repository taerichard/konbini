import React from "react";
import JapaneseTitle from "../components/shared/JapaneseTitle";
import { useLocation } from "react-router-dom";
import austinImg from "../resources/images/austin/art.jpg";
import "./styles/modsStyles.css";

// style the products like the link
// https://minimalissimo.com/

export default function Mods() {
  let location = useLocation();
  const { productsData } = location.state;

  return (
    <div>
      <JapaneseTitle />
      <h1 className="mods-title">Mods</h1>
      <div className="mods-titleImg">
        <img src={austinImg} />
      </div>
      <div className="mods-cards">
        {productsData.map((item) => {
          return (
            <div className="mods-card">
              <div className="mods-img">
                <img src={item.img} />
              </div>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
