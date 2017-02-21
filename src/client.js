import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Timer from './js/components/Timer.react';
import store from './store';

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Timer />
	</Provider>, document.getElementById('app'));

module.hot.accept('./js/components/Timer.react', ()=>{
	 var Timer = require('./js/components/Timer.react');
	<Provider store={store}>
		<Timer />
	</Provider>, document.getElementById('app')
})