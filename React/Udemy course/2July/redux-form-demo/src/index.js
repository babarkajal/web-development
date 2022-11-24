import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/index'

ReactDOM.render(
	<Provider store ={createStore(reducer)}>
	<App/>
	</Provider>,
	document.getElementById('root')
)
