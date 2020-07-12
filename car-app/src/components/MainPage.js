import React from "react";
import mercedes from "../image/mercedes.png";
import smallTriangle from "../image/small-triangle.svg";

export default function MainPage() {
  return (
    <header className="header__content">
      <main className="header__huge-content">
        <div className="header__content-rectangle">
          <h3>New Create Technology </h3>
          <img
            src={smallTriangle}
            alt="triangle"
            className="header__content-small-triangle"
          />
        </div>

        <figure className="header__content-services">
          <h1>Sercives</h1>
          <figcaption>
            Mercedes,Audi,Lexus are avilble in our serciveces
          </figcaption>
        </figure>

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

        <button className="scroll-down">
          <a href="#filter-cars" className="scroll-down-link">
            <span></span>Scroll
          </a>
        </button>

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
      </main>
    </header>
  );
}
