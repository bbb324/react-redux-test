import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './js/components/Layout.react';
import Timer from './js/components/Timer.react';
import store from './store';

const app = document.getElementById('app');
console.log(<Layout />);
ReactDOM.render(
	<Provider store={store}>
		<Timer />
	</Provider>, app)