import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../store/modules/auth/actions'

function WrappedRoute({ children: Component, isPrivate, ...rest }) {
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth)

	if (isPrivate && !auth.token) {
		dispatch(actions.loginFailure())
		return (
			<Redirect
				to={{
					pathname: '/singin',
					state: { prevPath: rest.location.pathname },
				}}
			/>
		)
	}
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Route {...rest}>{Component}</Route>
	)
}

WrappedRoute.defaultProps = {
	isPrivate: false,
}

WrappedRoute.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func,
		PropTypes.array,
	]).isRequired,
	isPrivate: PropTypes.bool,
}

export default WrappedRoute
