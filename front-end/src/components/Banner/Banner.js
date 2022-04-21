import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div
        class="carousel"
        data-flickity='{ "wrapAround": true, "autoPlay": true }'
      >
        <div class="carousel-cell" id="carousel-cell1">
          <div className="banner-text">
            <div className="banner-title">
              The Best University <strong>Of The State</strong>
            </div>
            <p>
              Technology is brining a massive wave of evolution on learning
              things on different ways.
            </p>
            <div className="banner-btn">
              <a href="/">Apply Now</a>
            </div>
          </div>
          {/* <p class="caption"> 02 / 03 </p> */}
        </div>
        <div class="carousel-cell" id="carousel-cell2">
          <div className="banner-text">
            <div className="banner-title">
              The Best University <strong>Of The State</strong>
            </div>
            <p>
              Technology is brining a massive wave of evolution on learning
              things on different ways.
            </p>
            <div className="banner-btn">
              <a href="/">Apply Now</a>
            </div>
            {/* <p class="caption"> 03 / 03 </p> */}
          </div>
        </div>
        <div class="carousel-cell" id="carousel-cell3">
          <div className="banner-text">
            <div className="banner-title">
              The Best University <strong>Of The State</strong>
            </div>
            <p>
              Technology is brining a massive wave of evolution on learning
              things on different ways.
            </p>
            <div className="banner-btn">
              <a href="/">Apply Now</a>
            </div>
            {/* <p class="caption"> 04 / 03 </p> */}
          </div>
        </div>
      </div>
      <div className="counter-text">
        <div className="banner-counter">
          <div>0</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
