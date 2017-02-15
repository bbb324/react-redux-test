export function autoAdd(num){
	return {
		type: 'AUTOADD',
		payload: (num + 2)
	}
}

export function autoDel(num){
	return {
		type: 'AUTODEL',
		payload: (num - 1)
	}
}