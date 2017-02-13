export function autoAdd(num){
	return {
		type: 'AUTOADD',
		payload: ++num
	}
}

export function autoDel(num){
	console.log('action, '+num);
	return {
		type: 'AUTODEL',
		payload: --num
	}
}