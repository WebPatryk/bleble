import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Polygon from '../../image/Polygon.svg';
import ErrorForm from '../Errors/ErrorForm';
import { ReactComponent as FormIllustration } from '../../image/form-illustration.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import gsap from 'gsap';
import PulseLoader from 'react-spinners/PulseLoader';
import { store } from 'react-notifications-component';
import styled from 'styled-components';
import { PersonAnimation } from '../../components/Elements/PersonAnimation';

const Login = styled.section`
	.sigin-in-container {
		background-color: var(--front-color);
		height: 90vh;
		display: flex;
	}
	.sign-in-left {
		width: 50%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.sign-in-box {
		margin: 0 auto;
		width: 45rem;
		background-color: #fff;
		padding: 30rem 5rem 35rem 5rem;
		position: relative;
		overflow: hidden;
	}
	.sign-in-polygon {
		position: absolute;
		top: 0;
		right: 0;
		width: 45rem;
		z-index: 1;
		fill: linear-gradient(90deg, #ffacac, rgb(228, 57, 57));
	}
	.sign-in-title {
		position: absolute;
		top: 7%;
		left: 30%;
		z-index: 3;
		font-size: 2.9rem;
		font-weight: bold;
		color: #fff;
	}
	.sign-in-form {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		background-color: #fff;
		padding: 100px 40px 50px 40px;
		box-shadow: 0 0 2px #ffacac;
	}

	.sign-in-form i {
		color: #ffacac;
		font-size: 1.8rem;
		margin-right: 1rem;
	}

	.login,
	.password,
	.email,
	.password-repeat {
		padding: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login-input,
	.password-input,
	.email-input,
	.password-repeat-input {
		border: none;
		outline: none;
		font-size: 1.8rem;

		border-bottom: 1px solid #ffacac;
		padding: 10px;
	}
	.login-input:focus,
	.password-input:focus,
	.email-input:focus,
	.password-repeat-input:focus {
		border-bottom: 2px solid rgb(232, 74, 74);
		background-color: rgba(232, 74, 74, 0.048);
	}

	.sign-in-form span {
		color: rgb(255, 0, 0);
		font-size: 1.5rem;
		font-weight: 500;
	}

	.sign-in-form span::before {
		display: inline;
		content: '⚠ ';
	}
	.sign-in-btn {
		display: block;
		text-align: center;
		padding: 13px 30px;
		background-image: linear-gradient(90deg, #ffacac, rgb(228, 57, 57));
		border-radius: 30px;
		border: none;
		outline: none;
		font-size: 2rem;
		font-weight: bold;
		color: #ffacac;
		margin: 2rem auto;
		color: #fff;
		cursor: pointer;
	}
	.add-account-link {
		margin-top: 1rem;
		width: 50%;
		float: right;
		text-align: center;
		font-size: 1.6rem;
		border-bottom: 1px solid rgb(228, 57, 57);
		color: rgb(228, 57, 57);
		font-weight: 600;
	}
	.sign-in-right {
		width: 50%;
	}
	.login-back {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.login-back p {
		opacity: 0.8;
		font-size: 1.2rem;
	}
	.back-account-link {
		margin-left: 1.1rem;
		text-align: center;
		font-size: 1.6rem;
		color: rgb(228, 57, 57);
		font-weight: 600;
	}

	@media screen and (max-width: 1650px) {
		.sign-in-box {
			width: 500px;
		}
		.illustration-login {
			width: 600px;
		}
	}

	@media screen and (max-width: 1400px) {
		.sign-in-box {
			width: 450px;
		}
		.illustration-login {
			width: 500px;
		}
	}

	@media screen and (max-width: 1150px) {
		.sign-in-left {
			margin: 5rem auto;
		}
		.sign-in-box {
			width: 450px;
		}
		.sign-in-right {
			display: none;
		}
	}

	@media screen and (max-width: 850px) {
		.sign-in-box {
			margin-top: 5rem;
			transform: scale(0.9);
		}
		.sign-in-left {
			width: 100%;
		}
	}
`;

const Spinner = styled.div`
	width: 100%;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export default function SignIn() {
	let history = useHistory();
	const [error, setError] = useState(null);
	const [authentication, setauthentication] = useState(false);

	const { register, handleSubmit, errors } = useForm();

	const SingPhoto = useRef(null);

	useEffect(() => {
		const [elements] = SingPhoto.current.children;

		const progressbar1 = elements.getElementById('progressbar1');
		const progressbar2 = elements.getElementById('progressbar2');
		const formbar1 = elements.getElementById('formbar1');
		const formbar2 = elements.getElementById('formbar2');
		const formbar3 = elements.getElementById('formbar3');
		const container = elements.getElementById('container');

		const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

		tl.set([formbar1, formbar2, formbar3], { visibility: 'hidden' });

		tl.fromTo(container, { opacity: 0, x: '1000' }, { duration: 1.3, x: '0', opacity: 1, ease: 'sine.out' })

			.fromTo(progressbar1, { x: '-=300' }, { duration: 2, x: '+=300', fill: '#EA5454', autoAlpha: 1 })

			.fromTo(progressbar2, { x: '+=300', autoAlpha: 0 }, { duration: 2, x: '-=300', autoAlpha: 1 }, '-=1.5')

			.fromTo(formbar1, { x: '0', visibility: 'visible' }, { x: '80', ease: 'sine.out' })
			.fromTo(formbar2, { x: '+=80', visibility: 'visible' }, { x: '-=80', ease: 'sine.out' })
			.fromTo(formbar3, { x: '0', visibility: 'visible' }, { x: '80', ease: 'sine.out' });
	}, []);

	const onSubmit = (data) => {
		const { login, password } = data;

		axios
			.post('http://localhost:1337/auth/local', {
				identifier: login,
				password: password
			})
			.then((response) => {
				// Handle success.
				setTimeout(() => {
					history.push('/user');
				}, 2500);

				setError(null);
				console.log('User profile', response.data.user);
				console.log('User token', response.data.jwt);

				const username = response.data.user.username;

				const email = response.data.user.email;

				localStorage.setItem('username', username);
				localStorage.setItem('emailUser', email);

				setauthentication(true);
				console.log('send authenticator');

				store.addNotification({
					title: 'You are logged in',
					message: 'Enjoy',
					type: 'success',
					insert: 'bottom',

					container: 'bottom-right',
					animationIn: ['animated', 'fadeIn'],
					animationOut: ['animated', 'fadeOut'],
					dismiss: {
						duration: 3000,
						onScreen: true,
						showIcon: true,
						pauseOnHover: true
					}
				});
			})
			.catch((error) => {
				// Handle error.
				console.log('An error occurred:', error);
				setError('Username or password is not correct!');

				store.addNotification({
					title: 'Your data is not correct',
					message: 'Try again',
					type: 'danger',
					insert: 'bottom',

					container: 'bottom-right',
					animationIn: ['animated', 'fadeIn'],
					animationOut: ['animated', 'fadeOut'],
					dismiss: {
						duration: 3000,
						onScreen: true,
						showIcon: true,
						pauseOnHover: true
					}
				});
			});
	};

	return (
		<Login>
			<section className="sigin-in-container">
				<main className="sign-in-left">
					<div className="sign-in-box">
						<img src={Polygon} alt="polygon-login" className="sign-in-polygon" />
						<h1 className="sign-in-title">Sign In</h1>

						<form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
							{error && <ErrorForm text={error} />}

							<Spinner>
								{authentication && (
									<div>
										<PulseLoader size={50} color={'#EA5454'} />
									</div>
								)}
							</Spinner>

							<div>
								<div className="login">
									<i className="fas fa-user"></i>
									<input
										type="text"
										className="login-input"
										placeholder="Username"
										name="login"
										ref={register({
											required: 'This field is required',
											minLength: { value: 6, message: 'Min length 6 characters' },
											maxLength: {
												value: 25,
												message: 'Max length 25 characters'
											}
										})}
									/>
								</div>

								{errors.login && <span>{errors.login.message}</span>}
								<div className="password">
									<i className="fas fa-lock"></i>
									<input
										type="password"
										className="password-input"
										placeholder="Password"
										name="password"
										ref={register({
											required: 'This field is required',
											minLength: { value: 6, message: 'Min length 6 characters' },
											maxLength: {
												value: 25,
												message: 'Max length 25 characters'
											}
										})}
									/>
								</div>
								{errors.password && <span>{errors.password.message}</span>}
								<button className="sign-in-btn">Sign in</button>
							</div>
							<Link to="/register" className="add-account-link">
								Create account
							</Link>
						</form>
					</div>
				</main>
				<PersonAnimation>
					<aside className="sign-in-right" ref={SingPhoto}>
						<FormIllustration className="illustration-login" />
					</aside>
				</PersonAnimation>
				<div className="triangle"></div>
			</section>
		</Login>
	);
}
