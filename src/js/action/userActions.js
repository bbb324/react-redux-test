import axios from 'axios';
export function fetchUser(){
	return {
		type: 'FETCH_USER_LIST',
		payload: axios.get('http://rest.learncode.academy/api/wstern/users')
	}
}