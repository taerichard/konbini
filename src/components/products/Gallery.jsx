import React from "react";
import bombImage from "../../resources/images/products/bomb.jpg";
import gentleManImage from "../../resources/images/products/gentlemen.jpg";
import man from "../../resources/images/products/man.jpg";
import manBun from "../../resources/images/products/manBun.jpg";
import smooth from "../../resources/images/products/smooth.jpg";
import train from "../../resources/images/products/train.jpg";
import weird from "../../resources/images/products/weird.jpg";
import image9 from "../../resources/images/products/asian.jpg";

const Gallery = () => {
  return (
    <div>
      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={bombImage} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">bomb</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img
              src={gentleManImage}
              alt="japanese food"
              width="100"
              height="100"
            />
          </div>
          <div class="text">gentleman</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={man} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">man</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={manBun} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">manBun</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={smooth} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">smooth</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={train} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">train</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={weird} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">weird</div>
        </div>
      </div>

      <div class="gallery-container">
        <div class="gallery-item">
          <div class="image">
            <img src={image9} alt="japanese food" width="100" height="100" />
          </div>
          <div class="text">asian</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
