import styled from 'styled-components';

export const Button = styled.div`
	width: 16rem;
	text-transform: uppercase;
	font-size: 1.4rem;
	color: var(--front-color);
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
