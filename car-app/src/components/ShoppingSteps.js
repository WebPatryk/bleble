import React, { useState } from "react";
import Basket from "./Basket";
import Account from "./Account";
import Delivery from "./Delivery";
import Submit from "./Submit";
import styled from "styled-components";

const Steps = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .steps {
    position: relative;
  }
  .steps__circle {
    border: 2px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 8rem;
  }
  .steps__circle-active {
    border: 2px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 8rem;
    background-color: #757575;
  }
  .steps:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 2px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  .steps__number {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    height: 100%;
  }
  .steps__name {
    display: block;
    margin-left: 0.3rem;
  }

  @media screen and (max-width: 800px) {
    .steps {
      margin-top: 7rem;
    }
    .steps__circle {
      width: 30px;
      height: 30px;
      margin-right: 5rem;
    }
    .steps__circle-active {
      width: 30px;
      height: 30px;
      margin-right: 5rem;
    }
    .steps:not(:last-child)::after {
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 30%;
      left: 40%;
    }
  }
  @media screen and (max-width: 400px) {
    margin-left: 2rem;
  }
`;

export default function ShoppingSteps() {
  const [step, setStep] = useState(1);
  const [delivery, setDelivery] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    postCode: "",
  });
  const [street, setStreet] = useState("");

  function nextStep() {
    setStep(step + 1);
  }
  function prevStep() {
    setStep(step - 1);
  }

  const handleDelivery = (input) => (e) => {
    setDelivery({ ...delivery, [input]: e.target.value });
  };

  function showStep() {
    switch (step) {
      case 1:
        return <Basket nextStep={nextStep} />;

      case 2:
        return <Account nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return (
          <Delivery
            nextStep={nextStep}
            prevStep={prevStep}
            handleDelivery={handleDelivery}
            userStreet={setStreet}
          />
        );

      case 4:
        return (
          <Submit
            {...delivery}
            prevStep={prevStep}
            userStreet={street}
            postCode={delivery.postCode}
            address={delivery.address}
          />
        );

      default:
        return <Basket nextStep={nextStep} />;
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <Steps>
        <div className="steps">
          <div
            className={
              step === 1 || step === 2 || step === 3 || step === 4
                ? "steps__circle-active"
                : "steps__circle"
            }
          >
            <h1
              className="steps__number"
              style={step === 1 ? { color: "#fff" } : { color: "#000" }}
            >
              1
            </h1>
          </div>
          <h1
            className="steps__name"
            style={step === 1 ? { color: "#757575" } : { color: "#000" }}
          >
            Basket
          </h1>
        </div>

        <div className="steps">
          <div
            className={
              step === 2 || step === 3 || step === 4
                ? "steps__circle-active"
                : "steps__circle"
            }
          >
            <h1 className="steps__number">2</h1>
          </div>
          <h1 className="steps__name">Account</h1>
        </div>

        <div className="steps">
          <div
            className={
              step === 3 || step === 4
                ? "steps__circle-active"
                : "steps__circle"
            }
          >
            <h1 className="steps__number">3</h1>
          </div>
          <h1 className="steps__name">Delivery</h1>
        </div>

        <div className="steps">
          <div
            className={step === 4 ? "steps__circle-active" : "steps__circle"}
          >
            <h1 className="steps__number">4</h1>
          </div>
          <h1 className="steps__name">Submit</h1>
        </div>
      </Steps>
      {showStep()}
    </div>
  );
}
