import * as types from '../types'

const inititalState = {
	isLoggedIn: false,
	token: false,
	user: {},
	isLoadding: false,
}

export default function reducer(state = inititalState, action) {
	switch (action.type) {
		case types.LOGIN_REQUEST: {
			const newState = { ...state, isLoadding: true }

			return newState
		}

		case types.LOGIN_SUCCESS: {
			const newState = {
				...state,
				isLoggedIn: true,
				token: action.payload.token,
				user: action.payload.user,
				isLoadding: false,
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
