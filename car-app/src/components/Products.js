import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ProductsCars from './ProductsCars';


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
  inCart,
  brand,
  image{
    url
  }
    }
  }
  `;

const ProdctsCart = styled.div`
    

  .products__container{
    overflow-x:hidden;
    background-color:var(--front-color);
  }
  .products__allCars-container{
    overflow-x:hidden;
  }
    .products__allCars-title{
    font-size:3rem;
    text-align:center;
    padding:2rem 0;
    transform:skew(-20deg);
       

    }
    .products__allCars{
    margin:5rem 3rem;
    }
    
  .products__row{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(650px,1fr));
    grid-template-rows:50rem;
    row-gap:30px;
    justify-items:center;

  }

  .more-elements{
    display:block;
  }
   .car-content{
    justify-self:center;
    }
`;



export default function Products() {

    const [query, setQuery] = useState(cars);
    const [allCars, setAllCars] = useState(false);



    let { loading, error, data } = useQuery(query);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error during fetch</div>;


    console.log(data.cars);



    function handleAddNumberCars() {


        let cars = gql`
{
    cars(limit:${numberCar += 2}){
        title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  brand,
  image{
    url
  }
    }
  }
  `;
        setQuery(cars);

        if (numberCar >= data.cars.length) {
            setAllCars(true);
        }
    }


    return (
        <div className="products__container">


            <ProdctsCart >
                <div className="products__allCars-container">
                    <h1 className="products__allCars-title">Here you have all available cars</h1>
                </div>


                <div className="products__allCars">

                    <div className="products__row">
                        {data.cars.map(car => {
                            const { id, title, year, country, price, state, image, inCart } = car;
                            if (!image) return <div>Loading...</div>;

                            return (

                                <ProductsCars id={id} year={year} country={country} price={price} state={state} inCart={inCart} image={image.url} title={title} />


                            );
                        })}

                    </div>
                </div>
                <div className="triangle"></div>
            </ProdctsCart>
            <div className="more-elements">
                <button className="more-cars" onClick={handleAddNumberCars} disabled={allCars}>Load more</button>
            </div>
        </div>
    );
}
