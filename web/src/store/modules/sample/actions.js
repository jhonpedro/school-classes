import * as actionTypes from '../types'

export function buttonClickRequest() {
	return {
		type: actionTypes.CLICK_REQUEST,
	}
}

export function buttonClickSuccess() {
	return {
		type: actionTypes.CLICK_SUCCESS,
	}
}

export function buttonClickFailure() {
	return {
		type: actionTypes.CLICK_FAILURE,
	}
}
