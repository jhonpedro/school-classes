import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function WrappedRoute({ children: Component, isPrivate, ...rest }) {
	const auth = useSelector((state) => state.auth)

	if (isPrivate && !auth.token) {
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
