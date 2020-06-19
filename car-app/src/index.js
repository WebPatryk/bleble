import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';

import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import { ProductsContext } from './context/context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});



ReactDOM.render(
  <ApolloProvider client={client}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </ApolloProvider>

  ,
  document.getElementById('root')
);

