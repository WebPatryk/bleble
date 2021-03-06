import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { Button } from '../Elements/Button';
import { ProductsContext } from '../../context/context';
import PayPalButton from '../PayPal/PayPalButton';

const SumbitComponent = styled.section`
	margin: 4rem auto;
	width: 50%;
	.submit__title {
		text-align: center;
		font-size: 2.2rem;
		padding: 1.5rem 0;
	}
	.submit__list {
		list-style-type: none;
		font-size: 1.5rem;
	}
	.submit__elements {
		font-size: 1.5rem;
		border: 1px solid ${({ theme }) => theme.border.primary};
		padding: 2rem 1rem;
		margin: 2rem 0;
	}
	.submit__user-data {
		font-size: 1.7rem;
		letter-spacing: 0.5px;
		color: 1px solid ${({ theme }) => theme.border.secondary};
		font-weight: 600;
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
	}
	.submit__car-box {
		display: flex;
		padding: 1rem;
		align-items: center;
	}
	.submit__photo {
		margin-right: 1rem;
		width: 150px;
	}
	.submit__car-brand {
		font-size: 2rem;
	}
`;

export default function Submit({ prevStep, address, postCode }) {
	function backStep() {
		prevStep();
	}
	const [valueState, setValueState] = useContext(ProductsContext);

	const reeduceCar = valueState.reduce((acc, curr) => {
		return acc + curr[0].price * curr[0].quantity;
	}, 0);

	PayPalButton({
		style: { size: 'large' }
	});

	const user = localStorage.getItem('username');

	let placeToDelivery = localStorage.getItem('deliveryPlace');

	const homeDelivery = `${address} ${postCode}`;
	return (
		<>
			<ThemeProvider theme={theme}>
				<SumbitComponent>
					<h1 className="submit__title">Check out correct your data</h1>
					<nav className="submit__data">
						<ul className="submit__list">
							<li className="submit__elements">
								Name: <span className="submit__user-data">{user ? user : 'Add name...'}</span>
							</li>
							<li className="submit__elements">
								Delivery to:{' '}
								<span className="submit__user-data"> {placeToDelivery || homeDelivery}</span>
							</li>
							<li className="submit__elements">
								Payment method: <span className="submit__user-data">Pay Pal</span>
							</li>
							<li className="submit__elements">
								Products:
								{valueState.map((basketElement) => (
									<div className="submit__car-box" key={basketElement[0].id}>
										<img
											src={`http://localhost:1337${basketElement[0].image.url}`}
											alt="car-photo"
											className="submit__photo"
										/>
										<h1 className="submit__car-brand">{basketElement[0].title}</h1>
									</div>
								))}
							</li>
						</ul>
					</nav>
					<Button onClick={backStep} type="button">
						<button className="button" type="button">
							{' '}
							Prev
						</button>
					</Button>
					<div style={{ textAlign: 'center' }}>
						<PayPalButton price={reeduceCar} />
					</div>
				</SumbitComponent>
			</ThemeProvider>
		</>
	);
}
