import React from "react";
import "./styles/titleStyles.css";
import JapaneseTitle from "./shared/JapaneseTitle";

const Title = () => {
  return (
    <div className="title-container">
      <JapaneseTitle />
      <div className="title-bio">
        <p>
          Based in the beautiful Austin, Texas. We sell vape products and
          accessories made from the US and Japan only. It is our pleasure to
          serve you.
        </p>
      </div>
    </div>
  );
};

export default Title;
