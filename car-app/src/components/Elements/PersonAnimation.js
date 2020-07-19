import styled from 'styled-components';
export const PersonAnimation = styled.div`
	.illustration-login {
		position: absolute;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-10%, -50%);
	}

	#circle1,
	#circle2,
	#circleform1,
	#circleform2,
	#circleform3 {
		animation: circleAnime 0.6s ease-in infinite alternate-reverse;
	}
	#circle2 {
		animation-delay: 0.3s;
	}
	#circleform1 {
		animation-delay: 0.3s;
	}
	#circleform2 {
		animation-delay: 0.5s;
	}
	#circleform3 {
		animation-delay: 0.8s;
	}

	@keyframes circleAnime {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.moonloader {
		margin: 0 auto;
		width: 100%;
		text-align: center;
	}

	.user-container {
		background-color: #f8f8f8;
	}
`;
