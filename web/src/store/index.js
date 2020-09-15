import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import persistedReducers from './modules/reduxPersist'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMidleware = createSagaMiddleware()

const store = createStore(
	persistedReducers(rootReducer),
	applyMiddleware(sagaMidleware)
)

const persistor = persistStore(store)

sagaMidleware.run(rootSaga)

export { store, persistor }
