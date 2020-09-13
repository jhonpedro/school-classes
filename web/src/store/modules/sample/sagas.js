import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from '../types'

const req = () =>
	// eslint-disable-next-line no-unused-vars
	new Promise((res, rej) => {
		setTimeout(() => {
			res()
		}, 5000)
	})

function* sample() {
	try {
		yield call(req)
		yield put(actions.buttonClickSuccess())
	} catch (error) {
		console.log(error)
		yield put(actions.buttonClickFailure())
	}
}

export default all([takeLatest(types.CLICK_REQUEST, sample)])
