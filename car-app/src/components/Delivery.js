import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { Button } from "./Elements/Button";
import DeliveryCity from "./DeliveryCity";
import Loading from "./Loading";

const DeliveryStyle = styled.section`
  width: 50%;
  margin: 7rem auto;
  text-align: center;
  .delivery__title {
    font-size: 2rem;
    margin: 2.5rem;
  }
  .delivery__box {
    border: 1px solid ${({ theme }) => theme.border.primary};
    padding: 2rem 0;
    cursor: pointer;
    margin: 2rem 0;
    border-radius: 10px;
  }
  .delivery__city {
    max-height: 50rem;
  }
  .delivery__text {
    letter-spacing: 0.7px;
    font-size: 1.5rem;
    text-align: left;
    margin-left: 4rem;
    font-weight: 500;
  }
  .delivery__input {
    border-radius: 30px;
    width: 50%;
    border: 1px solid ${({ theme }) => theme.border.secondary};
    padding: 1rem;
    font-size: 1.3rem;
    outline: none;
  }
  .delivery__input:focus {
    color: ${({ theme }) => theme.border.primary};
  }
  .delivery__checkbox {
    display: flex;
    justify-content: center;
  }
  .delivery__form {
    border: none;
  }
  .checkbox-input {
    width: 50px;
  }
  .delivery__check {
    width: initial !important;
  }
  .button {
    padding: 12px 2px;
    background-color: var(--brown-title-color);
    border: none;
    outline: none;
    color: #fff;
    font-size: 1.4rem;
    width: 100%;
    border-radius: 30px;
    cursor: pointer;

    :disabled {
      opacity: 0.3;
      cursor: default;
    }
  }

  input[type="radio"]:checked + label {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.border.secondary};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
  label {
    width: 100%;
    height: 100%;
    display: block;
  }

  .error {
    margin-top: 3rem;
    font-size: 1.8rem;
    color: red;
  }
  .delivery__input-city {
    padding: 15px 24px;
    font-size: 16px;
    outline: none;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  }
  .delivery__search-btn {
    padding: 15px 54px;
    font-size: 16px;
    outline: none;
    border-radius: 10px;
    border: none;
    background-color: var(--main-color);
    color: #fff;
    cursor: pointer;
    margin: 0 2rem;
  }
  .delivery_divider {
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    width: 70%;
    margin: 0 auto;
  }
  .delivery__parcel-title {
    font-size: 2rem;
    padding: 1rem;
  }
  .delivery__text {
    font-size: 2rem;
  }
  .delivery__deliverer {
    border: none;
  }
`;

export default function Delivery({ prevStep, nextStep, handleDelivery }) {
  function continueStep() {
    nextStep();
  }
  function backStep() {
    prevStep();
  }

  const [city, setCity] = useState("");
  const [parcelArea, setParcelArea] = useState([]);
  const [error, setError] = useState(null);
  const [courier, setCourier] = useState(false);
  const [parcel, setParcel] = useState(false);
  const [payPal, setPayPal] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(true);
  const [optionState, setOptionState] = useState("");
  const [loading, setLoading] = useState(false);

  const methodPost = courier || parcel;

  useEffect(() => {
    if (methodPost && payPal && isCheck) {
      setButtonOpen(false);
    } else {
      setButtonOpen(true);
    }

    localStorage.setItem("deliveryPlace", optionState);
  }, [isCheck, methodPost, payPal, optionState]);

  const handleSubmitParcel = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api-pl-points.easypack24.net/v1/points?city=${city}`
      );
      const data = await response.json();

      setParcelArea(data.items);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  function handleRadioChange(e) {
    if (e.target.id === "curier") {
      setCourier(true);
    } else {
      setCourier(false);
    }
    if (e.target.id === "parcel") {
      setParcel(true);
    } else {
      setParcel(false);
    }
  }

  function handleOption(e) {
    const value = e.target.value;
    const convertedString = value.charAt(0).toUpperCase() + value.slice(1);
    setOptionState(convertedString);
  }

  return (
    <ThemeProvider theme={theme}>
      <DeliveryStyle>
        <h1 className="delivery__title">
          1.Choose one of the method of delivery
        </h1>

        <form>
          <figcaption className="delivery__deliverer">
            <input
              type="radio"
              id="curier"
              name="delivery"
              onChange={handleRadioChange}
            />
            <label htmlFor="curier">
              <div className="delivery__box">
                <p className="delivery__text">Courier and delivey to home</p>
                {courier && (
                  <>
                    <div className="delivery__box delivery__form">
                      <input
                        type="text"
                        name="name"
                        placeholder="Address"
                        className="delivery__input"
                        onChange={handleDelivery("address")}
                      />
                    </div>

                    <div className="delivery__box delivery__form">
                      <input
                        type="text"
                        name="name"
                        placeholder="Postcode"
                        className="delivery__input"
                        onChange={handleDelivery("postCode")}
                      />
                    </div>
                  </>
                )}
              </div>
            </label>
            <input
              type="radio"
              id="parcel"
              name="delivery"
              onChange={handleRadioChange}
            />
            <label htmlFor="parcel">
              <div className="delivery__box delivery__city">
                <p className="delivery__text">Parcel machine</p>
                {parcel && (
                  <>
                    <form onSubmit={handleSubmitParcel}>
                      <h1 className="delivery__parcel-title">
                        Choose your parcel
                      </h1>
                      <div className="delivery_divider">
                        <input
                          type="text"
                          placeholder="Parcel..."
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="delivery__input-city"
                        />
                        <button type="submit" className="delivery__search-btn">
                          Search...
                        </button>
                      </div>

                      <>
                        <div className="select">
                          <select
                            name="format"
                            id="format"
                            className="select__input"
                            value={optionState}
                            onChange={handleOption}
                          >
                            <option value="default">
                              Choose delivery city...
                            </option>
                            {parcelArea.map((parcel, i) => {
                              return (
                                <DeliveryCity
                                  postCode={parcel.address.line2}
                                  street={parcel.address_details.city}
                                  address={parcel.address.line1}
                                  firstChild={i}
                                  key={parcel.name}
                                />
                              );
                            })}
                          </select>
                        </div>

                        {error && (
                          <h1 className="error">We can't find parcel here</h1>
                        )}
                        {loading && <Loading />}
                      </>
                    </form>
                  </>
                )}
              </div>
            </label>
          </figcaption>

          <h1 className="delivery__title">2.Payments methods</h1>
          <div className="delivery-methods">
            <input
              type="radio"
              id="PayPal"
              name="payments"
              onChange={() => setPayPal(!payPal)}
            />
            <label htmlFor="PayPal">
              <div className="delivery__box">
                <p className="delivery__text">PayPal</p>
                {payPal && (
                  <i className="delivery__text">
                    In the next page you will abel to pay by PayPal.
                  </i>
                )}
              </div>
            </label>
          </div>
          <h1 className="delivery__title">3.Personal data</h1>

          <div className="delivery-data">
            <div className="delivery__box delivery__form">
              <div className="delivery__checkbox">
                <input
                  type="checkbox"
                  name="rules"
                  className="delivery__input checkbox-input"
                  id="rules"
                  defaultChecked={isCheck}
                  onChange={() => setIsCheck(!isCheck)}
                />
                <label htmlFor="rules" className="delivery__check">
                  I accept shop rules
                </label>
              </div>
            </div>
          </div>
          <Button onClick={backStep} type="button">
            <button className="button" type="button">
              &lt;&lt; Back
            </button>
          </Button>
          <Button onClick={continueStep} type="button">
            <button className="button" type="button" disabled={buttonOpen}>
              Next &gt;&gt;
            </button>
          </Button>
        </form>
      </DeliveryStyle>
    </ThemeProvider>
  );
}
