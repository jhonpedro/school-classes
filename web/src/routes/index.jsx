import React from 'react'
import { Router, Switch } from 'react-router-dom'

import Route from './Route'
import history from '../services/history'
import Login from '../pages/Login'
import Landing from '../pages/Landing'
import Page404 from '../pages/Page404'
import Header from '../components/Header'

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" exact>
					<Landing />
				</Route>

				<Route path="/login">
					<Header showLogin />
					<Login />
				</Route>

				<Route path="*">
					<Header showLogin />
					<Page404 />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
