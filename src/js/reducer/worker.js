import axios from 'axios';

export default function reducer(state={
	userList: [],
	fetchStatus: null
}, action) {
	switch (action.type) {
		case 'FETCH_USER_LIST_PENDING': {
			return {...state, fetchStatus:'pending'}
		}
		case 'FETCH_USER_LIST_REJECT': {
			return {...state, fetchStatus: 'failed'}
		}
		case 'FETCH_USER_LIST_FULFILLED': {
			return {...state, userList: action.payload.data, fetchStatus: 'finished'}
		}
	}
	return state;
}