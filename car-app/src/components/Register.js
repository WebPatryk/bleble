import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Polygon from "../image/Polygon.svg";
import "../style/SignIn.css";
import { ReactComponent as FormIllustration } from "../image/form-illustration.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import gsap from "gsap";
import { store } from "react-notifications-component";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";

const Spinner = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Register() {
  let history = useHistory();

  const { register, handleSubmit, watch, errors } = useForm();
  const [authentication, setauthentication] = useState(false);

  const SingPhoto = useRef(null);

  const onSubmit = (data) => {
    const { username, email, password } = data;

    axios
      .post("http://localhost:1337/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        setTimeout(() => {
          history.push("/sign-in");
        }, 2500);

        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);

        setauthentication(true);

        store.addNotification({
          title: "Wonderfull you created acooung",
          message: "Enjoy using :)",
          type: "success",
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
      })
      .catch((error) => {
        // Handle error
        alert("An error occurred:", error);
      });
  };

  useEffect(() => {
    const [elements] = SingPhoto.current.children;

    const progressbar1 = elements.getElementById("progressbar1");
    const progressbar2 = elements.getElementById("progressbar2");
    const formbar1 = elements.getElementById("formbar1");
    const formbar2 = elements.getElementById("formbar2");
    const formbar3 = elements.getElementById("formbar3");
    const container = elements.getElementById("container");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.set([formbar1, formbar2, formbar3], { visibility: "hidden" });

    tl.fromTo(
      container,
      { opacity: 0, x: "1000" },
      { duration: 1.3, x: "0", opacity: 1, ease: "sine.out" }
    )

      .fromTo(
        progressbar1,
        { x: "-=300" },
        { duration: 2, x: "+=300", fill: "#EA5454", autoAlpha: 1 }
      )

      .fromTo(
        progressbar2,
        { x: "+=300", autoAlpha: 0 },
        { duration: 2, x: "-=300", autoAlpha: 1 },
        "-=1.5"
      )

      .fromTo(
        formbar1,
        { x: "0", visibility: "visible" },
        { x: "80", ease: "sine.out" }
      )
      .fromTo(
        formbar2,
        { x: "+=80", visibility: "visible" },
        { x: "-=80", ease: "sine.out" }
      )
      .fromTo(
        formbar3,
        { x: "0", visibility: "visible" },
        { x: "80", ease: "sine.out" }
      );
  }, []);

  return (
    <div className="sigin-in-container">
      <div className="sign-in-left">
        <div
          className="sign-in-box"
          style={{ padding: "35rem 5rem 35rem 5rem" }}
        >
          <img src={Polygon} alt="polygon-login" className="sign-in-polygon" />
          <h1 className="sign-in-title">Sign Up</h1>

          <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
            :
            {authentication && (
              <Spinner>
                <PulseLoader size={50} color={"#EA5454"} />
              </Spinner>
            )}
            <div className="login">
              <i class="fas fa-user"></i>
              <input
                type="text"
                className="login-input"
                placeholder="Username..."
                name="username"
                ref={register({
                  required: "This field is required",
                  minLength: { value: 6, message: "Min length 6 characters" },
                  maxLength: { value: 25, message: "Max length 25 characters" },
                })}
              />
            </div>
            {errors.username && <span>{errors.username.message}</span>}
            <div className="email">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                className="email-input"
                placeholder="Email..."
                name="email"
                ref={register({
                  required: "This field is required",
                  minLength: { value: 6, message: "Min length 6 characters" },
                  maxLength: { value: 25, message: "Max length 25 characters" },
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div className="password">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="password-input"
                placeholder="Password..."
                name="password"
                ref={register({
                  required: "This field is required",
                  minLength: { value: 6, message: "Min length 6 characters" },
                  maxLength: { value: 25, message: "Max length 25 characters" },
                })}
              />
            </div>
            {errors.password && <span>{errors.password.message}</span>}
            <div className="password-repeat">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="password-repeat-input"
                placeholder="Confirm password..."
                name="passwordRepeat"
                ref={register({
                  required: "This field is required",
                  minLength: { value: 6, message: "Min length 6 characters" },
                  maxLength: { value: 25, message: "Max length 25 characters" },
                  validate: (value) =>
                    value === watch("password") || "Passwords are diffrent",
                })}
              />
            </div>
            {errors.passwordRepeat && (
              <span>{errors.passwordRepeat.message}</span>
            )}
            <button className="sign-in-btn">Sign up</button>
            <div className="login-back">
              <p>Already have an account?</p>
              <Link to="/sign-in" className="back-account-link">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="sign-in-right" ref={SingPhoto}>
        <FormIllustration className="illustration-login" />
      </div>
      <div className="triangle"></div>
    </div>
  );
}
