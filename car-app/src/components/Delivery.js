import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Button } from './Elements/Button';
import DeliveryCity from './DeliveryCity';


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
.delivery__city{
    overflow-y:scroll;
    max-height:50rem;
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

.error{
    margin-top:3rem;
    font-size:1.8rem;
    color:red;
}
`;


export default function Delivery({ prevStep, nextStep, handleDelivery, userStreet }) {


    function continueStep() {
        nextStep();
    }
    function backStep() {
        prevStep();
    }

    const [city, setCity] = useState('');
    const [parcelArea, setParcelArea] = useState([]);
    const [error, setError] = useState(null);
    const [courier, setCourier] = useState(false);
    const [parcel, setParcel] = useState(false);
    const [payPal, setPayPal] = useState(false);;
    const [isCheck, setIsCheck] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [buttonOpen, setButtonOpen] = useState(true);
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        number: ""
    });

    const [toggle, setToggle] = useState(true);


    console.log(isCheck, delivery, payPal);
    function handleActiveDelivery() {
        if (delivery) {
            setButtonOpen(!buttonOpen);
        }
        if (payPal) {
            setButtonOpen(!buttonOpen);
        }
    }


    const handleSubmitParcel = async (e) => {
        if (parcelArea.length == 0) setError(true);
        e.preventDefault();

        try {
            const response = await fetch(`https://api-pl-points.easypack24.net/v1/points?city=${city}`);
            const data = await response.json();
            setParcelArea(data.items);
        }
        catch (err) {
            setError(err);
        }

    };




    return (
        <ThemeProvider theme={theme}>
            <DeliveryStyle>
                <h1 className="delivery__title">1.Method of delivery</h1>

                <form onChange={handleActiveDelivery}>


                    <div className="delivery__deliverer">
                        <input type="radio" id="curier" name="delivery" onChange={() => { setCourier(!courier); setDelivery(delivery => !delivery); }} />
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
                        <input type="radio" id="parcel" name="delivery" onChange={() => { setParcel(!parcel); setDelivery(delivery => !delivery); }} />
                        <label htmlFor="parcel">
                            <div className="delivery__box delivery__city" >
                                <p className="delivery__text">Parcel machine</p>
                                {parcel &&
                                    <>
                                        <form onSubmit={handleSubmitParcel}>
                                            <h1>Choose your parcel</h1>
                                            <input type="text" placeholder="Parcel..." value={city} onChange={(e) => setCity(e.target.value)} />
                                            <button type="submit">Search...</button>
                                            <div>

                                                <>
                                                    {parcelArea.map(parcel => (
                                                        <DeliveryCity
                                                            street={parcel.address.line2}
                                                            postcode={parcel.address_details.city}
                                                            voivodeship={parcel.address_details.province}
                                                            describtion={parcel.location_description}
                                                            name={parcel.name}
                                                            userStreet={userStreet}
                                                        />
                                                    ))}
                                                    {error && (parcelArea.length == 0) && <h1 className="error">We can't find parcel here</h1>}
                                                </>

                                            </div>

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

                    </div>
                    <h1 className="delivery__title">3.Personal data</h1>

                    <div className="delivery-data">
                        {/* <div className="delivery__box delivery__form">
                            <input type="text" name="name" placeholder="Name" className="delivery__input" onChange={(e) => { handleDelivery('name'); setPersonalInfo({ ...personalInfo, name: e.target.value }); }} value={personalInfo.name} />
                        </div>
                        <div className="delivery__box delivery__form" >
                            <input type="email" name="email" placeholder="Email" className="delivery__input" onChange={(e) => { handleDelivery('email'); setPersonalInfo({ ...personalInfo, email: e.target.value }); }} value={personalInfo.email} />
                        </div>
                        <div className="delivery__box delivery__form">
                            <input type="tel" name="number" className="delivery__input" placeholder="Phone number" onChange={(e) => { handleDelivery('number'); setPersonalInfo({ ...personalInfo, number: e.target.value }); }} value={personalInfo.number} />
                        </div> */}
                        <div className="delivery__box delivery__form">
                            <div className="delivery__checkbox">
                                <input type="checkbox"
                                    name="rules"
                                    className="delivery__input checkbox-input"
                                    id="rules"
                                    defaultChecked={isCheck}
                                    onChange={() => setIsCheck(true)} />
                                <label for="rules" className="delivery__check">I accept the shop rules</label>
                            </div>
                        </div>

                    </div>
                    <Button onClick={backStep} type="button">
                        <button className="button" type="button" >&lt;&lt; Back</button>
                    </Button>
                    <Button onClick={continueStep} type="button">
                        <button className="button" type="button" disabled={buttonOpen} >Next &gt;&gt;</button>
                    </Button>
                </form>
            </DeliveryStyle>
        </ThemeProvider>
    );
}
