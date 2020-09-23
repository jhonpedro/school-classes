import * as types from '../types'

const inititalState = {
	isLoggedIn: false,
	token: false,
	user: {},
	isLoadding: false,
}

export default function reducer(state = inititalState, action) {
	switch (action.type) {
		case types.LOGIN_SUCCESS: {
			const newState = {
				...state,
				isLoggedIn: true,
				token: action.payload.token,
				user: action.payload.user,
			}

			return newState
		}

		case types.LOGIN_FAILURE: {
			return inititalState
		}

		default: {
			return state
		}
	}
}
