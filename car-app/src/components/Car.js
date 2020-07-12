import React from "react";
import "../style/Car.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Car({ id, title, year, country, price, state, image }) {
  const numberWithSpaces = (numbers) => {
    return numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <main className="car__content">
      <header className="car__info">
        <h1 className="car__content-title">{title}</h1>
        <img
          src={`http://localhost:1337${image}`}
          alt="car"
          className="car__content-photo"
        />
      </header>

      <article className="car__primary-info">
        <h3 className="car__basic-info">
          Year Production: <p className="car__basic-data">{year}</p>
        </h3>
        <h3 className="car__basic-info">
          Country: <p className="car__basic-data">{country}</p>
        </h3>
        <h3 className="car__basic-info">
          Price: <p className="car__basic-data">{numberWithSpaces(price)} zł</p>
        </h3>
        <h3 className="car__basic-info">
          State: <p className="car__basic-data">{state}</p>
        </h3>
      </article>
      <Link to={`car/${id}`} className="car__link">
        {" "}
        <button className="car__btn">Details</button>
      </Link>
    </main>
  );
}

Car.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.any.isRequired,
  country: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.any.isRequired,
};
