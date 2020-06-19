import React from 'react';
import '../style/Car.css';


export default function ProductsCars({ id, title, year, country, price, state, image }) {
    return (



        <div className="car__content">
            <div className="car__info">

                <h1 className="car__content-title">{title}</h1>
                <img src={`http://localhost:1337${image}`} alt="car" className="car__content-photo" />

            </div>

            <div className="car__primary-info">
                <h3 className="car__basic-info">Year Production: <p className="car__basic-data">{year}</p></h3>
                <h3 className="car__basic-info">Country: <p className="car__basic-data">{country}</p></h3>
                <h3 className="car__basic-info">Price: <p className="car__basic-data">{price} zł</p></h3>
                <h3 className="car__basic-info">State: <p className="car__basic-data">{state}</p></h3>

            </div>
        </div>



    );
}