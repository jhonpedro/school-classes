import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

function ButtonComponent({ children, ...rest }) {
	return (
		// eslint-disable-next-line
		<Button {...rest} >
			{children}
		</Button>
	)
}

ButtonComponent.propTypes = {
	children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
}

export default ButtonComponent
