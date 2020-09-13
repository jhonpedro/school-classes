import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import Routes from './routes'

import store from './store'
import GlobalStyle from './assets/styles/global'
import history from './services/history'

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<GlobalStyle />
				<Routes />
				<ToastContainer autoClose={3000} />
			</Router>
		</Provider>
	)
}

export default App
