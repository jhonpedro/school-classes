import * as types from '../types'

const inititalState = {
	click: false,
}

export default function reducer(state = inititalState, action) {
	switch (action.type) {
		case types.CLICK_SUCCESS: {
			const newState = { ...state }
			newState.click = !newState.click
			console.log(newState)
			return newState
		}

		case types.CLICK_REQUEST: {
			console.log('making the requisition')
			return state
		}

		case types.CLICK_FAILURE: {
			console.log('failed :(')
			return state
		}

		default: {
			return state
		}
	}
}
