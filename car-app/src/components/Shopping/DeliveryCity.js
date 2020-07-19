import React from 'react';
import styled from 'styled-components';

const City = styled.section`
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		appearance: none;
		outline: 0;
		box-shadow: none;
		border: 0 !important;
		background: #5c6664;
		background-image: none;
		flex: 1;
		padding: 0 0.5em;
		color: #fff;
		cursor: pointer;
		font-size: 2em;
		font-family: 'Open Sans', sans-serif;
	}
	select::-ms-expand {
		display: none;
	}
	.select {
		position: relative;
		display: flex;
		width: 40em;
		height: 5em;
		line-height: 3;
		background: #5c6664;
		overflow: hidden;
		border-radius: 0.25em;
		margin: 0 auto;
	}
	.select::after {
		content: '\25BC';
		position: absolute;
		top: 0;
		right: 0;
		padding: 1em 3em;
		background: #2b2e2e;
		cursor: pointer;
		pointer-events: none;
		transition: 0.25s all ease;
	}
	.select:hover::after {
		color: var(--main-color);
	}
	.select__input {
		width: 100%;
	}
	.option {
		display: block;
		padding: 20px;
		font-size: 2rem;
		margin: 1rem;
		height: 100px;
	}
`;

export default function DeliveryCity({ street, postCode, address }) {
	const cityFullName = ` ${street} , ${postCode} , ${address}`;

	return (
		<City>
			<option className="option" value={cityFullName}>
				{cityFullName}
			</option>
		</City>
	);
}
