import React from "react";
import mercedes from "../image/mercedes.png";
import smallTriangle from "../image/small-triangle.svg";

export default function MainPage() {
  return (
    <div className="header__content">
      <div className="header__huge-content">
        <div className="header__content-rectangle">
          <h1>New Create Technology </h1>
          <img
            src={smallTriangle}
            alt="triangle"
            className="header__content-small-triangle"
          />
        </div>

        <div className="header__content-services">
          <h1>Sercives</h1>
          <p>Mercedes,Audi,Lexus are avilble in our serciveces</p>
        </div>

        <div className="ellipse-container">
          <div className="ellipse thin"></div>
          <div className="ellipse thick"></div>
          <div className="ellipse yellow"></div>
        </div>

        <img
          src={mercedes}
          alt="background logo mercedes"
          className="header__content-car"
        />

        <h1 className="header__photo-describtion">
          {" "}
          The most popular and speed car
        </h1>

        <div className="scroll-down">
          <a href="#filter-cars" className="scroll-down-link">
            <span></span>Scroll
          </a>
        </div>

        <div className="triangle">
          <div className="social-media">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://github.com">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
