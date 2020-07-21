import styled from 'styled-components';

export const SingleCarStyle = styled.section`
	.details__box {
		width: 100%;
		height: 90vh;
		overflow: hidden;
		position: relative;
		background-color: var(--front-color);
	}
	.details__box-title {
		text-align: center;
		font-size: 4rem;
		color: var(--brown-title-color);
		font-weight: bold;
	}

	.details__box-title-container {
		margin: 0 auto;
		background-color: var(--main-color);
		width: 70rem;
		position: relative;
		z-index: 150;
		box-shadow: 0 0 30px var(--main-color);
		border: 1.5rem solid #fff;
		padding: 1rem 0;
	}

	.details__box-content {
		display: flex;
		width: 100%;
		height: 80%;
		justify-content: space-around;
		align-items: center;
	}
	.details__box-left {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50%;
	}
	.details__box-right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 50%;
		background-color: var(--main-color);
		padding: 3rem;
		margin-top: 15rem;
	}
	.details__box-right-text {
		background-color: var(--box-color);
		width: 90%;
		margin: 0 auto;
		padding: 2rem 0;
	}
	.details__box-right-text:nth-child(2) {
		margin-bottom: 3rem;
	}
	.box-two {
		margin-top: 5rem;
	}

	.basket-link {
		margin: 2rem auto;
	}

	.detail__box-row {
		display: flex;
		justify-content: space-around;
	}

	.detail__box-parts {
		color: var(--brown-title-color);
		font-weight: bold;
		font-size: 2.3rem !important;
	}

	.detail__box-data {
		font-size: 2rem;
		font-weight: normal;
	}
	.detail__box-right-title {
		width: 100%;
		text-align: center;
		font-size: 2.6rem;
		color: var(--production-title-color);
	}
	.back-home-link {
		position: absolute;
		bottom: 6rem;
		left: 18rem;
		padding: 1rem;
		margin: 1rem;
		color: black;
		font-size: 2rem;
	}
	.details__box-right p {
		font-size: 2rem;
		align-self: flex-start;
		padding: 2rem 0;
	}
	.details__box-img {
		margin-left: 5rem;
		width: 45rem;
	}
	.triangle {
		pointer-events: none;
	}
	.more-details {
		border: none;
		outline: none;
		background-color: initial;
		box-shadow: none;
		color: black;
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: underline;
		align-self: flex-start;
		cursor: pointer;
	}
	.button-container {
		cursor: pointer;
		transition: all 0.2s ease-in;
	}
	.button-container:hover {
		opacity: 0.8;
	}
	.btn-to-basket {
		padding: 13px 30px;
		font-size: 2rem;
		background-color: #c4c4c4;
		border-radius: 30px;
		border: none;
		outline: none;
		color: #fff;
		cursor: pointer;
		margin-top: 5rem;
	}
	.btn-to-basket:hover {
		opacity: 0.8;
	}

	.ellipse-container-single-car {
		width: 608px;
		height: 608px;
		position: absolute;
		top: 46%;
		left: 26%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		margin: 0 auto;
		/* z-index: -1; */
	}

	.ellipse {
		position: absolute;
		top: 0;
		border-radius: 50%;
		border-style: solid;
	}

	.ellipse.thin {
		width: 100%;
		height: 100%;
		border-width: 3px;
		border-color: black;
		opacity: 0.5;
	}

	.ellipse.thick {
		width: 93%;
		height: 93%;
		border-width: 10px;
		border-color: #fff;
		transform: rotate(-45deg);
		top: 22px;
		left: 25px;
	}

	.ellipse.yellow {
		width: 93%;
		height: 93%;
		border-width: 10px;
		border-color: var(--main-color) transparent;
		transform: rotate(-45deg);
		top: 22px;
		left: 25px;
		animation: ellipseRotate 15s ease-in-out infinite;
		animation-timing-function: linear;
	}

	@keyframes ellipseRotate {
		0% {
			transform: rotate(-45deg);
		}
		100% {
			transform: rotate(-405deg);
		}
	}

	.car-icon {
		vertical-align: middle;
		margin-right: 2rem;
	}
	.basket-btn {
		outline: 5px solid var(--box-color);
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 1400px) {
		.details__box {
			overflow: scroll;
			height: auto;
		}

		.details__box-left {
			margin-top: 11rem;
			transform: scale(0.8);
		}
		.ellipse-container-single-car {
			left: 50%;
		}
		.detail__box-parts {
			font-size: 1.5rem !important;
		}
		.detail__box-data {
			font-size: 1.1rem;
		}
		.car-icon {
			font-size: 2rem;
		}
		.detail__box-right-title {
			font-size: 2.3rem;
		}
		.back-to-home-btn {
			bottom: -25rem !important ;
		}
	}

	@media screen and (max-width: 1100px) {
		.details__box-content {
			flex-direction: column;
		}
		.details__box-left {
			margin-top: 16rem;
		}
		.ellipse-container-single-car {
			width: 538px;
			height: 538px;
		}
		.details__box-img {
			width: 45rem;
		}
		.detail__box-row {
			display: block;
			margin-left: 6rem;
		}
		.back-to-home-btn {
			display: none !important;
		}
		.details__box-right {
			width: 90%;
		}
	}

	@media screen and (max-width: 850px) {
		.ellipse-container-single-car {
			width: 478px;
			height: 478px;
		}
		.details__box-img {
			width: 39rem;
			margin: 0;
		}

		.detail__box-parts {
			font-size: 1.5rem !important;
		}
		.detail__box-data {
			font-size: 1.3rem;
		}
		.car-icon {
			font-size: 1.9rem;
		}
		.detail__box-right-title {
			font-size: 1.8rem;
		}
		.details__box-title-container {
			width: 90%;
		}
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

	@media screen and (max-width: 400px) {
		.car__content {
			width: 25rem;
		}
		.ellipse-container-single-car {
			width: 358px;
			height: 358px;
		}
		.details__box-img {
			width: 35rem;
		}
		.ellipse.yellow {
			width: 90% !important;
			height: 90% !important;
		}
		.ellipse.thick {
			width: 90% !important;
			height: 90% !important;
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
