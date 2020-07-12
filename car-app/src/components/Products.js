import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ProductsCars from "./ProductsCars";
import Loading from "./Loading";

let numberCar = 2;

let cars = gql`
{
    cars(limit:${numberCar}){
        title,
  id,
  year,
  country,
  price,
  state,

  brand,
  image{
    url
  }
    }
  }
  `;

const ProdctsCart = styled.div`
  .products__container {
    overflow-x: hidden;
    background-color: var(--front-color);
  }
  .products__allCars-container {
    overflow-x: hidden;
  }
  .products__allCars-title {
    font-size: 3rem;
    text-align: center;
    padding: 2rem 0;
    transform: skew(-20deg);
  }
  .products__allCars {
    margin: 5rem 3rem;
  }

  .products__row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(650px, 1fr));
    grid-template-rows: 50rem;
    row-gap: 30px;
    justify-items: center;
  }

  .more-elements {
    display: block;
  }
  .car-content {
    justify-self: center;
  }

  @media screen and (max-width: 800px) {
    .products__allCars-title {
      margin-top: 5rem;
    }
  }

  @media screen and (max-width: 700px) {
    .products__row {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  @media screen and (max-width: 500px) {
    .products__row {
      grid-template-columns: repeat(1, 1fr);
    }
    .car__content {
      width: 31rem;
    }
  }

  @media screen and (max-width: 330px) {
    .car__content {
      width: 25rem;
    }
    .car__content-photo {
      width: 20rem;
    }
    .car__basic-info {
      font-size: 1.3rem;
      width: 100%;
      margin: 0;
    }
  }
`;

export default function Products() {
  const [query, setQuery] = useState(cars);
  const [allCars, setAllCars] = useState(false);

  let { loading, error, data } = useQuery(query);

  if (loading) return <Loading />;
  if (error) return <div>Error during fetch</div>;

  function handleAddNumberCars() {
    let cars = gql`
{
    cars(limit:${(numberCar += 2)}){
        title,
  id,
  year,
  country,
  price,
  state,

  brand,
  image{
    url
  }
    }
  }
  `;
    setQuery(cars);

    if (data.cars.length === 8) {
      setAllCars(true);
    }
  }

  return (
    <div className="products__container">
      <ProdctsCart>
        <header className="products__allCars-container">
          <h1 className="products__allCars-title">
            Here you have all available cars
          </h1>
        </header>

        <main className="products__allCars">
          <div className="products__row">
            {data.cars.map((car) => {
              const { id, title, year, country, price, state, image } = car;
              if (!image) return <Loading />;

              return (
                <ProductsCars
                  id={id}
                  year={year}
                  country={country}
                  price={price}
                  state={state}
                  image={image.url}
                  title={title}
                  key={id}
                />
              );
            })}
          </div>
        </main>
        <div className="triangle"></div>
      </ProdctsCart>
      <div className="more-elements">
        <button
          className="more-cars"
          onClick={handleAddNumberCars}
          disabled={allCars}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
