import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'

const store = createStore(Reducers,applyMiddleware(thunk));
ReactDOM.render(
	<Provider store ={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)