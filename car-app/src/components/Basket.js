import React, { useState, useContext, useEffect, useRef } from 'react';
import '../style/Basket.css';
import { ProductsContext } from '../context/context';
import { store } from 'react-notifications-component';
import PayPalButton from './PayPalButton';
import styled from 'styled-components';

const Button = styled.div`

width:16rem;
text-transform:uppercase;
font-size:1.4rem;
color:var(--front-color);
background-color:var(--brown-title-color);
border-radius:30px;
display:inline-block;
margin:1rem 2rem;
text-align:center;
box-shadow: 0 0 3px rgba(0,0,0,.5);
cursor:pointer;

:hover{
    opacity:.7;
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
    
`;





export default function Basket(props) {


    function continueStep() {
        props.nextStep();
    }

    PayPalButton({
        style: { size: 'large' }
    });



    const [valueState, setValueState] = useContext(ProductsContext);

    const numberWithSpaces = (numbers) => {
        return numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };



    const reeduceCar = valueState.reduce((acc, curr) => {
        return (acc + (curr[0].price * curr[0].quantity));
    }, 0);



    const resetBasketElements = () => {
        store.addNotification({
            title: "Basket has been deleted!",
            message: "welcome again :)",
            type: "danger",
            insert: "bottom",

            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true,
                showIcon: true,
                pauseOnHover: true,
            },
        });
        setValueState([]);
    };


    const subtractQuantity = (id) => {

        let newState = [...valueState];
        newState = newState.filter(item => item[0].id === id);

        let checkquantityElement = newState.map(item => item[0].quantity);
        if (checkquantityElement > 1) {

            let quantityElement = newState.map(item => item[0].quantity -= 1);
            let number = parseInt(quantityElement);
            console.log(number);

            setValueState([...valueState], [newState]);
        }
        else {
            return;
        }


    };

    const addQuantity = (id) => {


        let newState = [...valueState];
        newState = newState.filter(item => item[0].id === id);
        let quantityElement = newState.map(item => item[0].quantity += 1);
        let number = parseInt(quantityElement);
        console.log(number);

        setValueState([...valueState], [newState]);


    };

    const deleteElement = (id) => {
        const lastQuestion = window.confirm("Are you sure to delete this car ?");
        if (lastQuestion) {
            const NewStateElement = [...valueState.filter(item => item[0].id !== id)];
            setValueState(NewStateElement);
        }
        else {
            return;
        }


    };



    return (
        <>
            <div className="basket__container">
                <div className="basket__products">

                    <h1>Poducts</h1>
                    <h1>Name</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Remove</h1>
                    <h1>Totatal</h1>
                </div>

                <div>

                    {valueState.length ? (valueState.map(basketElement => (
                        <div className="basket__element">
                            <div className="basket__element-content">
                                <img src={`http://localhost:1337${basketElement[0].image.url}`} alt="car" className="basket__image" />
                                <h1 className="basket__titleElement">{basketElement[0].title}</h1>
                                <h1 className="basket__priceElement">{numberWithSpaces(basketElement[0].price)} zł</h1>
                                <h1 className="basket__span-container">
                                    <span className="basket__span-btn" onClick={() => subtractQuantity(basketElement[0].id)}>-</span >
                                    <span className="basket__span-btn">{basketElement[0].quantity}</span >
                                    <span className="basket__span-btn" onClick={() => addQuantity(basketElement[0].id)}>+</span >
                                </h1>
                                <h1>
                                    <i class="fas fa-trash" onClick={() => deleteElement(basketElement[0].id)}></i>

                                </h1>
                                <h1 className="basket__totalElement">{numberWithSpaces(basketElement[0].price * basketElement[0].quantity)} zł</h1>
                            </div>
                        </div>

                    )
                    ))

                        :
                        <div className="basket__empty">Empty Basket</div>

                    }




                </div >



                <div className="basket__conclusion">

                    <div className="basket__summary">
                        <button onClick={resetBasketElements}>Clear cart</button>
                    </div>
                    <div className="basket__payment">
                        <h1>Total: {numberWithSpaces(reeduceCar)} zł</h1>
                    </div>

                    <Button onClick={continueStep}>
                        <button className="button" type="button" disabled={valueState.length === 0} >Next {">>"}</button>
                    </Button>

                </div>

            </div>

            <div className="triangle"></div>

        </>

    );
};
