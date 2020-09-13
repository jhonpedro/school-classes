import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mainReducer from './modules/mainReducer'
import mainSaga from './modules/mainSaga'

const sagaMidleware = createSagaMiddleware()

const store = createStore(mainReducer, applyMiddleware(sagaMidleware))

sagaMidleware.run(mainSaga)

export default store
