import React, { useState, useMemo, lazy, Suspense } from 'react';
import '../style/HeaderContent.css';
import Loading from './Loading';
import { useQuery } from '@apollo/react-hooks';

import { cars, Audi, Mercedes, Lexus, New, Used, Less100, Less200, More200 } from '../querys/query';
import MainPage from './MainPage';
const Car = lazy(() => import('./Car'));

function HeaderContent() {
	const [query, setQuery] = useState(cars);

	const { loading, error, data } = useQuery(query);

	let content;

	if (loading) {
		content = <Loading />;
	} else if (error) {
		content = <div>Error</div>;
	} else {
		content = (
			<section className="car__huge-box" style={{ height: '800px' }} id="filter-cars">
				<article className="car__container">
					{content}

					{data.cars.map((car) => {
						return (
							<Suspense key={car.id} fallback={<Loading />}>
								<Car
									year={car.year}
									country={car.country}
									price={car.price}
									state={car.state}
									image={car.image?.url}
									title={car.title}
									id={car.id}
								/>
							</Suspense>
						);
					})}
				</article>
			</section>
		);
	}

	const MemoMenuPage = useMemo(() => {
		return <MainPage />;
	}, []);

	return (
		<>
			{MemoMenuPage}

			<section className="filter__container">
				<h1 className="filter__container-title">Filter:</h1>
				<div className="filter__elements">
					<div className="filter__methods">
						<h2 className="filter__methods-title">Mark:</h2>
						<div className="filter__buttons">
							<a className="pointer firstPointer pointer--one" onClick={() => setQuery(cars)}>
								All
							</a>
							<a className="pointer pointer--two" onClick={() => setQuery(Audi)}>
								Audi
							</a>
							<a className="pointer pointer--three" onClick={() => setQuery(Mercedes)}>
								Mercedes
							</a>
							<a className="pointer lastPointer pointer--four" onClick={() => setQuery(Lexus)}>
								Lexus
							</a>
						</div>
					</div>

					<div className="filter__methods">
						<h2 className="filter__methods-title">Price:</h2>
						<div className="filter__buttons">
							<a className="pointer firstPointer pointer--one" onClick={() => setQuery(Less100)}>
								&lt; 100 000 zł
							</a>
							<a className="pointer pointer--two pointer-cost" onClick={() => setQuery(Less200)}>
								&lt; 200 000 zł
							</a>
							<a className="pointer lastPointer three pointer-cost" onClick={() => setQuery(More200)}>
								&gt; 200 000 zł
							</a>
						</div>
					</div>

					<div className="filter__methods">
						<h2 className="filter__methods-title">State:</h2>
						<div className="filter__buttons">
							<div className="pointer firstPointer pointer--one" onClick={() => setQuery(New)}>
								New
							</div>
							<div className="pointer lastPointer pointer--two" onClick={() => setQuery(Used)}>
								Used
							</div>
						</div>
					</div>
				</div>
			</section>

			{content}
		</>
	);
}

export default HeaderContent;
