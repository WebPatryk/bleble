import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import '../style/SingleCar.css';
import { ProductsContext } from '../context/context';
import '../style/buttons.css';
import { store } from 'react-notifications-component';
import Loading from './Loading';
import {
	AiFillCar,
	AiOutlineGlobal,
	AiOutlineDollarCircle,
	AiFillStar,
	AiOutlineExperiment,
	AiFillDashboard,
	AiOutlineSlack,
	AiTwotoneAppstore
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function SingleCar() {
	const [valueState, setValueState] = useContext(ProductsContext);

	let { id } = useParams();

	const cars = gql`
    {
        cars(where: {
        id:${id}
      }){
          title,
          id,
          year,
          country,
          price,
          state,
          quantity,
            details{
            id,
            FossilType,
            Power,
            Gearbox,
            NumberOfPlaces
          }
          image{
            url
          }
        }
      }
`;
	let { loading, error, data } = useQuery(cars);

	if (loading) return <Loading />;
	if (error) return <p>Error :(</p>;
	const activeInBasket = valueState.map((item) => item[0].id);
	const selectedItem = activeInBasket.find((item) => item === id);

	function handleAddToBasket() {
		store.addNotification({
			title: 'Great! You added car to basket!',
			message: 'Enjoy shopping',
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

		setValueState((prevState) => [...prevState, Object.assign({}, data.cars)]);
	}

	const numberWithSpaces = (numbers) => {
		return numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	};

	return (
		<section className="single-car__container">
			{data.cars.map((car) => {
				const { title, year, country, price, state, image, id } = car;

				const { FossilType, Power, Gearbox, NumberOfPlaces } = car.details;

				return (
					<main key={id}>
						<div className="details__box">
							<header className="details__box-title-container">
								<h1 className="details__box-title">{title}</h1>
							</header>

							<article className="details__box-content">
								<div className="details__box-left">
									<div className="ellipse-container-single-car">
										<div className="ellipse thin"></div>
										<div className="ellipse thick"></div>
										<div className="ellipse yellow"></div>
									</div>
									<img
										src={`http://localhost:1337${image.url}`}
										alt="car"
										className="details__box-img"
									/>

									<Link to="/">
										<button className="button-container back-to-home-btn">
											<div className="icon-container">
												<i className="fas fa-home home-icon"></i>
											</div>
											<div className="textButton-container">
												<h1 className="textButton">Back to home</h1>
											</div>
										</button>
									</Link>
								</div>
								<IconContext.Provider value={{ size: '3rem', className: 'car-icon' }}>
									<div className="details__box-right">
										<div className="details__box-right-text">
											<h3 className="detail__box-right-title">Basic information:</h3>
											<div className="detail__box-row">
												<div className="detail__box-row-left">
													<p className="detail__box-parts">
														<AiFillCar />
														Year Production:{' '}
														<span className="detail__box-data">{year}</span>
													</p>
													<p className="detail__box-parts">
														<AiOutlineGlobal />
														Country: <span className="detail__box-data">{country}</span>
													</p>
												</div>
												<div className="detail__box-row-right">
													<p className="detail__box-parts">
														<AiOutlineDollarCircle />
														Price:{' '}
														<span className="detail__box-data">
															{numberWithSpaces(price)} zł
														</span>
													</p>
													<p className="detail__box-parts">
														<AiFillStar />
														State: <span className="detail__box-data">{state}</span>
													</p>
												</div>
											</div>
										</div>

										<article className="details__box-right-text box-two">
											<h1 className="detail__box-right-title">More details:</h1>
											<div className="detail__box-row ">
												<div className="detail__box-row-left">
													<p className="detail__box-parts">
														<AiOutlineExperiment />
														Type of fuel:{' '}
														<span className="detail__box-data">{FossilType}</span>
													</p>
													<p className="detail__box-parts">
														<AiFillDashboard />
														Speed: <span className="detail__box-data">{Power} KM</span>
													</p>
												</div>
												<div className="detail__box-row-right ">
													<p className="detail__box-parts">
														<AiOutlineSlack />
														Gearbox: <span className="detail__box-data">{Gearbox}</span>
													</p>
													<p className="detail__box-parts">
														<AiTwotoneAppstore />
														Number of places:{' '}
														<span className="detail__box-data">{NumberOfPlaces}</span>
													</p>
												</div>
											</div>
										</article>

										<Link
											to={'/basket'}
											className="basket-link"
											onClick={selectedItem ? (e) => e.preventDefault() : null}
										>
											<button
												className="button-btn add-to-basket basket-btn"
												onClick={handleAddToBasket}
												disabled={selectedItem}
											>
												<div className="icon-container">
													<i className="fas fa-shopping-cart home-icon"></i>
												</div>
												<div className="textButton-container">
													<h1 className="textButton">Add to basket</h1>
												</div>
											</button>
										</Link>
									</div>
								</IconContext.Provider>
							</article>
						</div>
					</main>
				);
			})}
		</section>
	);
}
