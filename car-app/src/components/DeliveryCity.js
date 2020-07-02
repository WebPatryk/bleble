import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MdLocationOn } from 'react-icons/md';


const City = styled.div`
    display:flex;
    padding-top:3rem;
    padding:10px;
    justify-content:center;
    align-items:center;


    .city__icon{
    color:var(--main-color);
    font-size:4rem;
    }
    .city__left{
        flex-basis:10rem;
    }
    .city__right{
        flex-basis:30rem;
    }
    h1{
        font-size:1.5rem;
    }
    h2{
        font-size:1.2rem;
        font-weight:400;
    }
    h3{
        font-size:1.1rem;
        font-weight:400;
    }
    .h4{
        font-size:1rem;
        font-weight:400;
    }
    &:hover{
        background:gray;
    }
`;




export default function DeliveryCity({ street, postcode, voivodeship, describtion, name, userStreet }) {

    const [choosenStreet, setChoosenStreet] = useState("");
    const [choosenPostcode, setChoosenPostcode] = useState("");
    const [choosenDescribtion, setChoosenDescribtion] = useState("");


    function handleCity() {
        setChoosenStreet(street);
        userStreet(choosenStreet);
        setChoosenPostcode(postcode);
        setChoosenDescribtion(describtion);
        userStreet(choosenStreet);

    }


    return (

        <City key={name} onClick={handleCity} >
            <div className="city__left">
                <MdLocationOn className="city__icon" />
            </div>
            <div className="city__right">
                <h1>{postcode}</h1>
                <h2>{street}</h2>
                <h3>{voivodeship}</h3>
                <h4>{describtion}</h4>
            </div>

        </City>

    );
}
