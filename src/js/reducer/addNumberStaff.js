export default function numberChange(state={
	num: 1
}, action){
	switch (action.type) {
		case 'AUTOADD': {
			return {...state, num: action.payload}
			break;
		}
		case 'AUTODEL': {
			console.log(action.payload);
			return {...state, num: action.payload}
			break;
		}
	}
	return state;
}