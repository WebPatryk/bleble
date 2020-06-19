import React, { useState, useMemo, lazy, Suspense } from 'react';
import '../style/HeaderContent.css';
import Loading from './Loading';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { cars, Audi, Mercedes, Lexus, New, Used, Less100, Less200, More200 } from '../querys/query';
import MainPage from './MainPage';
const Car = lazy(() => import('./Car'));

function HeaderContent() {

    const [query, setQuery] = useState(cars);


    let { loading, error, data } = useQuery(query);

    let content;

    if (loading) {
        content = <Loading />;
    }
    else if (error) {
        content = <div>Error</div>;
    }
    else {
        content = (
            <div className="car__huge-box" style={{ height: "800px" }} id="filter-cars">

                <div className="car__container">

                    {content}


                    {data.cars.map(car => {

                        return (
                            <Suspense fallback={<div>Loading....</div>}>
                                <Car id={car.id} year={car.year} country={car.country} price={car.price} state={car.state} inCart={car.inCart} image={car.image?.url} title={car.title} />
                            </Suspense>

                        );
                    }
                    )}

                </div>

            </div>
        );
    }

    const MemoMenuPage = useMemo(() => {
        return <MainPage />;
    }, []);



    return (
        <>
            {MemoMenuPage}

            <div className="filter__container">
                <h1 className="filter__container-title">Filter:</h1>
                <div className="filter__elements">


                    <div className="filter__methods">
                        <h2 className="filter__methods-title">Mark:</h2>
                        <div className="filter__buttons">

                            <div className="pointer firstPointer pointer--one" onClick={() => setQuery(cars)}>All</div>
                            <div className="pointer pointer--two" onClick={() => setQuery(Audi)}>Audi</div>
                            <div className="pointer pointer--three" onClick={() => setQuery(Mercedes)}>Mercedes</div>
                            <div className="pointer lastPointer pointer--four" onClick={() => setQuery(Lexus)}>Lexus</div>
                        </div>

                    </div>

                    <div className="filter__methods">
                        <h2 className="filter__methods-title">Price:</h2>
                        <div className="filter__buttons">

                            <div className="pointer firstPointer pointer--one" onClick={() => setQuery(Less100)}>&lt; 100 000 zł</div>
                            <div className="pointer pointer--two pointer-cost" onClick={() => setQuery(Less200)}>&lt; 200 000 zł</div>
                            <div className="pointer lastPointer three pointer-cost" onClick={() => setQuery(More200)}>&gt; 200 000 zł</div>


                        </div>
                    </div>

                    <div className="filter__methods">
                        <h2 className="filter__methods-title">State:</h2>
                        <div className="filter__buttons">

                            <div className="pointer firstPointer pointer--one" onClick={() => setQuery(New)}>New</div>
                            <div className="pointer lastPointer pointer--two" onClick={() => setQuery(Used)}>Used</div>

                        </div>
                    </div>

                </div>

            </div>

            {content}
        </>

    );
}

export default HeaderContent;

