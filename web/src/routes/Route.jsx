import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function WrappedRoute({ children: Component, isPrivate, ...rest }) {
	const isLoggedIn = false

	if (isPrivate && !isLoggedIn) {
		return (
			<Redirect
				to={{
					pathname: '/login',
					state: { prevPath: rest.location.pahtname },
				}}
			/>
		)
	}
	console.log(Component)
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Route {...rest}>{Component}</Route>
	)
}

WrappedRoute.defaultProps = {
	isPrivate: false,
}

WrappedRoute.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
	isPrivate: PropTypes.bool,
}

export default WrappedRoute
