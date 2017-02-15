import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';  //console.log prevState, curState, nextState
import thunk from 'redux-thunk'; //async func
import promise from 'redux-promise-middleware'; // promise handler

import index from './js/reducer/index';



const rootReducer = applyMiddleware(promise(), thunk, logger());

if(module.hot) {
	module.hot.accept('./js/reducer/', ()=>{
		const nextRootReducer = require('./js/reducer/index').default;
	})
}

export default createStore(index, rootReducer)