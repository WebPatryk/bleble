import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import { Button } from './Elements/Button';
import { ProductsContext } from '../context/context';
import PayPalButton from './PayPalButton';
const SumbitComponent = styled.div`
    margin:4rem auto;
    width:50%;
.submit__title{
    text-align:center;
    font-size:2.2rem;
    padding:1.5rem 0;

}
.submit__list{
    list-style-type:none;
    font-size:1.5rem;
}
.submit__elements{
    font-size:2.2rem;
    border:1px solid ${({ theme }) => theme.border.primary};
    padding:2rem 1rem;
    margin:2rem 0;
}
.submit__user-data{
    font-size:1.7rem;
    letter-spacing:.5px;
    color: 1px solid ${({ theme }) => theme.border.secondary};
    font-weight:600;
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
    }

`;

export default function Submit({ name, email, number, prevStep, userStreet, address, postCode, delivery, ...rest }) {

    console.log(userStreet);

    function backStep() {
        prevStep();
    }

    const [valueState, setValueState] = useContext(ProductsContext);

    const reeduceCar = valueState.reduce((acc, curr) => {
        return (acc + (curr[0].price * curr[0].quantity));
    }, 0);

    PayPalButton({
        style: { size: 'large' }
    });

    const user = localStorage.getItem('username');

    return (
        <>
            <ThemeProvider theme={theme}>
                <SumbitComponent>
                    <h1 className="submit__title">Check out correct your data</h1>
                    <div className="submit__data">
                        <ul className="submit__list">
                            <li className="submit__elements">Name: <span className="submit__user-data">{user ? user : 'Add name...'}</span></li>
                            <li className="submit__elements">Address: <span className="submit__user-data">{address ? address : 'Add number...'}</span></li>
                            <li className="submit__elements">Post Code: <span className="submit__user-data">{postCode ? postCode : 'Add Post code...'}</span></li>
                            <li className="submit__elements">Delivery to: <span className="submit__user-data">{delivery ? delivery : 'Add Delivery...'}</span></li>

                        </ul>
                    </div>
                    <Button onClick={backStep} type="button">
                        <button className="button" type="button" >{' '} Prev</button>
                    </Button>
                    <div style={{ textAlign: "center" }}>
                        <PayPalButton price={reeduceCar} />
                    </div>


                </SumbitComponent>
            </ThemeProvider>
        </>
    );
}
