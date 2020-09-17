import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input } from './styles'

function InputComponent({ placeholder, ...rest }) {
	return (
		<Container>
			<p>{placeholder}</p>
			{/* eslint-disable-next-line */}
			<Input type="text" {...rest} />
		</Container>
	)
}

InputComponent.propTypes = {
	placeholder: PropTypes.string.isRequired,
}

export default InputComponent
