//import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from './app';
import Reducer from './reducer'


ReactDOM.render(
	// send the store to the provider
	<Provider store={createStore(Reducer)}>
	<App/>
	</Provider>,
	document.getElementById('root')
);