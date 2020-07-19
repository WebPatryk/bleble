import React from 'react';
// import '../style/Car.css';
import styled from 'styled-components';

const CarStyle = styled.section`
	.car__content {
		width: 40rem;
		padding: 2rem;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 50;
		height: 50rem;
		margin-bottom: 5rem;
	}

	.car__content-photo {
		width: 30rem;
	}
	.car__content-title {
		text-align: center;
		font-size: 2rem;
		text-transform: uppercase;
		margin-bottom: 2rem;
	}
	.car__primary-info {
		margin-left: 3rem;
		align-self: center;
		margin-top: 1rem;
	}
	.car__basic-info {
		padding: 0.5rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
	}
	.car__basic-data {
		font-size: 1.3rem;
		font-weight: 500;
		margin-left: 1rem;
	}
	.car__btn {
		display: block;
		padding: 16px 50px;
		border: none;
		outline: none;
		font-size: 1.5rem;
		text-align: center;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 20px;
		margin: 1rem auto;
		color: rgb(255, 255, 255);
		background-color: #f2c94c;
	}
	.car__btn:hover {
		opacity: 0.8;
		cursor: pointer;
	}

	.car__link {
		text-decoration: none;
	}

	@media screen and (max-width: 500px) {
		.products__row {
			grid-template-columns: repeat(1, 1fr);
		}
		.car__content {
			width: 28rem;
		}
		.car__content-photo {
			width: 18rem;
		}
		.car__primary-info {
			margin-bottom: 2rem;
		}
	}

	@media screen and (max-width: 330px) {
		.car__content {
			width: 25rem;
		}
		.car__content-photo {
			width: 20rem;
		}
		.car__basic-info {
			font-size: 1.3rem;
			width: 100%;
			margin: 0;
		}
	}
`;

export default function ProductsCars({ title, year, country, price, state, image }) {
	return (
		<CarStyle>
			<section className="car__content">
				<article className="car__info">
					<h1 className="car__content-title">{title}</h1>
					<img src={`http://localhost:1337${image}`} alt="car" className="car__content-photo" />
				</article>

				<hgroup className="car__primary-info">
					<h3 className="car__basic-info">
						Year Production: <p className="car__basic-data">{year}</p>
					</h3>
					<h3 className="car__basic-info">
						Country: <p className="car__basic-data">{country}</p>
					</h3>
					<h3 className="car__basic-info">
						Price: <p className="car__basic-data">{price} zł</p>
					</h3>
					<h3 className="car__basic-info">
						State: <p className="car__basic-data">{state}</p>
					</h3>
				</hgroup>
			</section>
		</CarStyle>
	);
}
