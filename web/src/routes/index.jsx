import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'
import Landing from '../pages/Landing'
import Page404 from '../pages/Page404'
import Students from '../pages/Students'
import Student from '../pages/Student'
import NewStudent from '../pages/NewStudent'

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

			<Route path="/students" exact isPrivate>
				<Students />
			</Route>

			<Route path="/student/:id" isPrivate>
				<Student />
			</Route>

			<Route path="/students/new" isPrivate>
				<NewStudent />
			</Route>

			<Route path="*">
				<Page404 />
			</Route>
		</Switch>
	)
}

export default Routes
