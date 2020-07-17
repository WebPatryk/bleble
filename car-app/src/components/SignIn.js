import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Polygon from '../image/Polygon.svg';
import '../style/SignIn.css';
import ErrorForm from './ErrorForm';
import { ReactComponent as FormIllustration } from '../image/form-illustration.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import gsap from 'gsap';
import PulseLoader from 'react-spinners/PulseLoader';
import { store } from 'react-notifications-component';
import styled from 'styled-components';

function SignIn() {
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

	const Spinner = styled.div`
		width: 100%;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`;

	return (
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
			<aside className="sign-in-right" ref={SingPhoto}>
				<FormIllustration className="illustration-login" />
			</aside>
			<div className="triangle"></div>
		</section>
	);
}

export { SignIn };
