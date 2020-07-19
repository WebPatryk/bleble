import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaStopwatch, FaBox } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import { GiPriceTag } from 'react-icons/gi';
import nice from '../../image/nice.png';

const AccountContainer = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 7rem;

	.account__title {
		text-align: left;
		font-size: 2.2rem;
		display: block;
	}
	.account_container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.btn {
		padding: 13px 0;
		text-align: center;
		font-size: 1.5rem;
		color: #fff;
		background-color: var(--main-color);
		border: none;
		outline: none;
		display: block;
		border-radius: 50px;
	}
	.btn:hover {
		opacity: 0.7;
	}
	.account__login-btn {
		margin-top: 2rem;
	}
	.account__register-btn {
		background-color: var(--border-filter-color);
	}
	.account__preposition {
		text-align: center;
		margin: 2rem 0;
		font-size: 1.3rem;
	}
	.account__main-title {
		font-size: 2.2rem;
		padding: 2rem 0;
	}
	.account__table {
		display: flex;
		align-items: center;
		padding: 2rem 0;
	}
	.account__adventages-text {
		font-size: 1.4rem;
		font-weight: 400;
	}
	.account__heading {
		font-size: 2rem;
		margin-top: 3rem;
		color: var(--heading-color);
		margin-bottom: 4rem;
	}
	.account__user {
		color: var(--main-color);
		font-size: 2.1rem;
		display: inline-block;
	}
`;

const Button = styled.div`
	width: 16rem;
	text-transform: uppercase;
	font-size: 1.4rem;
	color: var(--front-color);
	background-color: var(--brown-title-color);
	padding: 12px 2px;
	border-radius: 30px;
	display: inline-block;
	margin: 1rem 2rem;
	text-align: center;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}
`;

export default function Account({ prevStep, nextStep }) {
	function continueStep() {
		nextStep();
	}
	function backStep() {
		prevStep();
	}

	return (
		<AccountContainer>
			<h1 className="account__title">Do you have an account ?</h1>

			{!localStorage.getItem('username') ? (
				<article className="account__container">
					<Link to="sign-in" className="btn account__login-btn ">
						Login to your account
					</Link>
					<p className="account__preposition">Or</p>
					<Link to="register" className=" btn account__register-btn">
						Register
					</Link>

					<IconContext.Provider value={{ size: '2rem', style: { marginRight: '2rem' } }}>
						<h2 className="account__main-title">Why it worth it have an account</h2>
						<div>
							<div className="account__table">
								<FaStopwatch />
								<p className="account__adventages-text">Fast shopping products</p>
							</div>
							<div className="account__table">
								<IoMdListBox />
								<p className="account__adventages-text">Check out your previus order</p>
							</div>
							<div className="account__table">
								<FaBox />
								<p className="account__adventages-text">Follow the products status</p>
							</div>
							<div className="account__table">
								<GiPriceTag />
								<p className="account__adventages-text">Use an discounts and promotions</p>
							</div>
						</div>
					</IconContext.Provider>
					<Button onClick={backStep}>{'<<'}Back</Button>
					<Button onClick={continueStep}>Next {'>>'}</Button>
				</article>
			) : (
				<section>
					<figure>
						<img src={nice} alt="nice" />
						<h1 className="account__heading">
							Great <figcaption className="account__user">{localStorage.getItem('username')}</figcaption>{' '}
							you have an account go next!
						</h1>
					</figure>
					<Button onClick={backStep}> {'<<'}Back</Button>
					<Button onClick={continueStep}>Next {'>>'}</Button>
				</section>
			)}
		</AccountContainer>
	);
}
