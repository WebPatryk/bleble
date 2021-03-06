import styled from 'styled-components';
import triangle from '../../image/triangle.svg';
export const BasketElement = styled.section`
	.basket__container {
		padding-top: 3rem;
		height: 90vh;
		background-color: #f8f8f8;
	}

	.basket__products {
		display: grid;
		width: 100%;

		grid-template-columns: repeat(6, 1fr);
		justify-items: center;
		border: 1px solid black;
		padding: 1rem 0;
		width: 90%;
		margin: 3rem auto;
		grid-gap: 70px;
		overflow-x: auto;
	}
	.basket__products h1 {
		font-size: 2.5rem;
	}

	.basket__element-content {
		margin-top: 3rem;
		display: grid;
		width: 100%;

		grid-template-columns: repeat(6, 1fr);
		justify-items: center;
		align-items: center;
		border: 1px solid lightgray;
		position: relative;
		z-index: 5;
		width: 90%;
		margin: 3rem auto;
		min-height: 100px;
	}
	.basket__titleElement {
		color: brown;
	}
	.basket__priceElement,
	.basket__totalElement {
		color: rgb(92, 54, 9);
	}

	.basket__element h2 {
		font-size: 1.5rem;
	}
	.basket__image {
		width: 130px;
	}

	.basket__conclusion {
		margin: 0;
		width: 95%;
		text-align: right;
		position: relative;
		z-index: 10;
	}

	.basket__summary button {
		align-self: center;
		text-align: center;
		padding: 12px 30px;
		border: 2px solid rgb(223, 135, 135);
		background-color: #f8f8f8;
		font-size: 2rem;
		font-weight: bold;
		border-radius: 15px;
		outline: none;
		transition: all 0.3s ease-in-out;
	}
	.basket__summary button:hover {
		cursor: pointer;
		opacity: 0.8;
	}
	.basket__payment {
		margin: 5rem auto;
		font-size: 2.5rem;
	}
	.basket__payment h2 {
		font-size: 2.5rem;
		width: 100%;
		text-align: right;
	}
	.paypalLogo {
		width: 90px;
	}
	.basket__span-container {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.basket__span-btn {
		display: inline-block;
		padding: 10px 15px;
		border: 2px solid black;
		margin-right: 1rem;
		font-size: 1.5rem;
		cursor: pointer;
		outline: none;
	}
	.fa-trash {
		font-size: 2rem;
		color: #f2c94c;
		position: relative;
		transition: 0.9s ease-in-out;
	}
	.fa-trash::before {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.3s ease-in-out;
	}
	.fa-trash:hover::before {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: rgba(211, 211, 211, 0.178);
		animation: spark 1s ease-in-out;
		backface-visibility: hidden;
	}
	@keyframes spark {
		0% {
			width: 50px;
			height: 50px;
		}
		100% {
			width: 80px;
			height: 80px;
		}
	}
	.basket__empty {
		font-size: 10rem;
		text-align: center;
		height: 100vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 0);
	}
	@media screen and (max-width: 1100px) {
		.basket__span-btn {
			font-size: 1.2rem;
		}
	}

	@media screen and (max-width: 1050px) {
		.basket__products {
			display: none;
		}
		.basket__element-content {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
		}
		.basket__element-content h1 {
			padding: 1rem 0;
		}
		.basket__element-content img {
			width: 300px;
		}
		.basket__titleElement {
			font-size: 2.3rem !important;
		}
		.basket__priceElement::before {
			content: 'Price: ';
		}
		.basket__totalElement::before {
			content: 'Total price: ';
		}

		.basket__summary,
		.basket__payment h1 {
			text-align: center;
		}
	}
	.triangle {
		display: block;
		background-image: url(${triangle});
		background-size: cover;
		width: 800px;
		height: 800px;
		position: absolute;
		bottom: 0;
		right: 0;
	}
`;
