import { all } from 'redux-saga/effects'

import sample from './sample/sagas'

export default function* rootSaga() {
	return yield all([sample])
}
