import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {devServer as uri} from './utils';
import { ApolloProvider } from '@apollo/client';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
});



ReactDOM.render(
  <React.StrictMode>
	<ApolloProvider client={client}>
	<Provider store={store}>
	<App />
	</Provider>
	</ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

