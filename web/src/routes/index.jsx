import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'
import Landing from '../pages/Landing'
import Page404 from '../pages/Page404'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<Landing />
			</Route>

			<Route path="/singin">
				<SingIn />
			</Route>

			<Route path="/singup">
				<SingUp />
			</Route>

			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	)
}

export default Routes
