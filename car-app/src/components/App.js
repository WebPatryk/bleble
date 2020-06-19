import React, { useState } from 'react';
import HeaderContent from './HeaderContent';
import '../style/App.css';
import Products from './Products';
import Contacts from './Contacts';
import SingleCar from './SingleCar';
import Basket from './Basket';
import { SignIn } from './SignIn';
import Register from './Register';
import User from './User';
import { ProductsContext } from '../context/context';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import ShoppingSteps from './ShoppingSteps';


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

            {/* <Route component={HeaderContent} /> */}

          </Switch>



        </Router>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
