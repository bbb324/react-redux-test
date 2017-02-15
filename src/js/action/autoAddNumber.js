export function autoAdd(num){
	return {
		type: 'AUTOADD',
		payload: (num + 1)
	}
}

export function autoDel(num){
	return {
		type: 'AUTODEL',
		payload: (num - 1)
	}
}