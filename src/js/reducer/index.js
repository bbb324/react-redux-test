import { combineReducers } from 'redux';

import worker from './worker';
import numberChange from './addNumberStaff';
export default combineReducers({
	worker: worker,
	addNumberStaff: numberChange
});