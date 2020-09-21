import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './routes'

import { store, persistor } from './store'
import GlobalStyle from './assets/styles/global'
import history from './services/history'

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router history={history}>
					<GlobalStyle />
					<Routes />
					<ToastContainer autoClose={5000} />
				</Router>
			</PersistGate>
		</Provider>
	)
}

export default App
