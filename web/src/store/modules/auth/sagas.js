import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import history from '../../../services/history'
import axios from '../../../services/axios'

import * as actions from './actions'
import * as types from '../types'

function* loginRequest({ payload }) {
	try {
		const { email, password } = payload
		const response = yield call(axios.post, '/session/', { email, password })
		yield put(actions.loginSuccess(response.data))

		toast.info('Login feito com sucesso')

		axios.defaults.headers.Authorization = `Bearer ${response.data.token}`

		history.push(payload.prevPath)
	} catch (error) {
		toast.error('Usuário ou senha incorretos')
		yield put(actions.loginFailure())
	}
}

function persistToken({ payload }) {
	const token = get(payload, 'auth.token', '')

	if (!token) return

	axios.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
	takeLatest(types.LOGIN_REQUEST, loginRequest),
	takeLatest(types.PERSIST_TOKEN, persistToken),
])
