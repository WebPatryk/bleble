import React, { useState } from 'react';
import HeaderContent from './Content/HeaderContent';
import Products from './Cars/Products';
import Contacts from './Contacts/Contacts';
import SingleCar from './Cars/SingleCar';
import SignIn from './Account/SignIn';
import Register from './Account/Register';
import User from './Account/User';
import { ProductsContext } from '../context/context';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ShoppingSteps from './Shopping/ShoppingSteps';
import SuccessfulShopping from './Shopping/SuccessfulShopping';

function App() {
	const [valueState, setValueState] = useState([]);

	return (
		<>
			<ProductsContext.Provider value={[valueState, setValueState]}>
				<Router>
					<ReactNotification />
					<Navbar />
					<Switch>
						<Route exact path="/" component={HeaderContent} />
						<Route path="/products" component={Products} />
						<Route path="/contacts" component={Contacts} />
						<Route path="/car/:id" component={SingleCar} />
						<Route path="/basket" component={ShoppingSteps} />
						<Route path="/sign-in" component={SignIn} />
						<Route path="/register" component={Register} />
						<Route path="/user" component={User} />
						<Route path="/successfully" component={SuccessfulShopping} />
					</Switch>
				</Router>
			</ProductsContext.Provider>
		</>
	);
}

export default App;
