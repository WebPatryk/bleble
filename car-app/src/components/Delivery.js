import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Button } from './Elements/Button';


const DeliveryStyle = styled.div`
width:50%;
margin:7rem auto;
text-align:center;
.delivery__title{
font-size:2rem;
margin:2.5rem;
}
.delivery__box{
border:1px solid ${({ theme }) => theme.border.primary};
padding:2rem 0;
cursor:pointer;
margin:2rem 0;

}
.delivery__text{
letter-spacing:.7px;
font-size:1.5rem;
text-align:left;
margin-left:4rem;
}
.delivery__input{
border-radius:30px;
width:50%;
border: 1px solid ${({ theme }) => theme.border.secondary};
padding:1rem;
font-size:1.3rem;
outline:none;
}
.delivery__input:focus{
color: ${({ theme }) => theme.border.primary};
}
.delivery__checkbox{
display:flex;
justify-content:center;

}
.delivery__form{
border:none;
}
.checkbox-input{
width:50px;
}
.delivery__check{
    width:initial !important;
}
.button{
padding:12px 2px;
background-color:var(--brown-title-color);
border:none;
outline:none;
color:#fff;
font-size:1.4rem;
width:100%;
border-radius:30px;
cursor:pointer;

:disabled{
    opacity:.3;
    cursor:default;
    }
}      

input[type="radio"]:checked + label {
    background-color:${({ theme }) => theme.border.secondary};

}
label{
    width:100%;
    height:100%;
    display:block
}
`;


export default function Delivery({ prevStep, nextStep, handleDelivery }) {


    function continueStep() {
        nextStep();
    }
    function backStep() {
        prevStep();
    }
    const [city, setCity] = useState('');
    const [ParcelArea, setParcelArea] = useState([]);

    const [error, setError] = useState(null);

    const [courier, setCourier] = useState(false);
    const [parcel, setParcel] = useState(false);
    const [payPal, setPayPal] = useState(false);
    const [home, setHome] = useState(false);

    const [isCheck, setIsCheck] = useState(false);

    function handleCheckbox() {
        setIsCheck(!isCheck);
    }
    const handleSubmitParcel = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api-pl-points.easypack24.net/v1/points?city=${city}`);
        const data = await response.json();
        setParcelArea(data);
        // .then(res => res.json())
        // .then(data => setParcelArea(data));
    };
    console.log(ParcelArea);
    // useEffect(() => {
    //     async function fetchParcel(){
    //     try {
    //         const response = await fetch(`https://api-pl-points.easypack24.net/v1/points?city=${city}`);
    //         const data = await response.json();
    //         setParcelArea(data);
    //     }
    //     catch (error) {
    //         setError(error);
    //     }
    // }

    // }, [city]);


    return (
        <ThemeProvider theme={theme}>
            <DeliveryStyle>
                <h1 className="delivery__title">1.Method of delivery</h1>


                <div className="delivery__deliverer">
                    <input type="radio" id="curier" name="delivery" onChange={() => setCourier(!courier)} />
                    <label htmlFor="curier">
                        <div className="delivery__box">
                            <p className="delivery__text">Courier and delivey to home</p>
                            {courier &&
                                <>
                                    <div className="delivery__box delivery__form">
                                        <input type="text" name="name" placeholder="Address" className="delivery__input" onChange={handleDelivery('address')} />
                                    </div>

                                    <div className="delivery__box delivery__form">
                                        <input type="text" name="name" placeholder="Postcode" className="delivery__input" onChange={handleDelivery('postCode')} />
                                    </div>
                                </>
                            }
                        </div>
                    </label>
                    <input type="radio" id="parcel" name="delivery" onChange={() => setParcel(!parcel)} />
                    <label htmlFor="parcel">
                        <div className="delivery__box">
                            <p className="delivery__text">Parcel machine</p>
                            {parcel &&
                                <>
                                    <form onSubmit={handleSubmitParcel}>
                                        <h1>Choose your parcel</h1>
                                        <input type="text" placeholder="Parcel..." value={city} onChange={(e) => setCity(e.target.value)} />
                                        <button type="submit">Search...</button>
                                        <ul>
                                            {/* <li>{city ? city.location_description : null}</li> */}
                                        </ul>

                                    </form>
                                </>
                            }
                        </div>
                    </label>
                </div>
                <h1 className="delivery__title">2.Payments methods</h1>
                <div className="delivery-methods">
                    <input type="radio" id="PayPal" name="payments" onChange={() => setPayPal(!payPal)} />
                    <label htmlFor="PayPal">
                        <div className="delivery__box">
                            <p className="delivery__text">PayPal</p>
                            {payPal &&
                                <p>In the next page you will abel to pay by PayPal.</p>
                            }
                        </div>
                    </label>
                    {/* <input type="radio" id="home" name="payments" onChange={() => setHome(!home)} />
                    <label htmlFor="home">
                        <div className="delivery__box">
                            <p className="delivery__text">Payment on delivery</p>
                            {home &&
                                <p>This is home content</p>
                            }
                        </div>
                    </label> */}
                </div>
                <h1 className="delivery__title">3.Personal data</h1>

                <div className="delivery-data">
                    <div className="delivery__box delivery__form">
                        <input type="text" name="name" placeholder="Name" className="delivery__input" onChange={handleDelivery('name')} />
                    </div>
                    <div className="delivery__box delivery__form" >
                        <input type="email" name="email" placeholder="Email" className="delivery__input" onChange={handleDelivery('email')} />
                    </div>
                    <div className="delivery__box delivery__form">
                        <input type="tel" name="number" className="delivery__input" placeholder="Phone number" onChange={handleDelivery('number')} />
                    </div>
                    <div className="delivery__box delivery__form">
                        <div className="delivery__checkbox">
                            <input type="checkbox"
                                name="rules"
                                className="delivery__input checkbox-input"
                                id="rules"
                                defaultChecked={isCheck}
                                onChange={handleCheckbox} />
                            <label for="rules" className="delivery__check">I accept the shop rules</label>
                        </div>
                    </div>

                </div>
                <Button onClick={backStep} type="button">
                    <button className="button" type="button" >{' '} Prev</button>
                </Button>
                <Button onClick={continueStep} type="button">
                    <button className="button" type="button" disabled={!isCheck}>Next >></button>
                </Button>

            </DeliveryStyle>
        </ThemeProvider>
    );
}
