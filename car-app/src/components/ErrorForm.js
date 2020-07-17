import React from 'react';
import styled from 'styled-components';

export default function ErrorForm({ text }) {
	const ErorTitle = styled.h1`
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		color: rgb(255, 0, 0);
		padding: 2rem auto;
	`;

	return (
		<section>
			<ErorTitle>{text}</ErorTitle>
		</section>
	);
}
