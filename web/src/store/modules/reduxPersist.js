import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default (reducers) => {
	const persistedReducers = persistReducer(
		{
			key: 'root',
			storage,
			whitelist: ['auth'],
		},
		reducers
	)

	return persistedReducers
}
