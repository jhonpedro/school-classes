import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function LabeledIcon({ labelName, component: Icon, ...rest }) {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Container {...rest}>
			{Icon}
			<p>{labelName}</p>
		</Container>
	)
}

LabeledIcon.propTypes = {
	labelName: PropTypes.string.isRequired,
	component: PropTypes.element.isRequired,
}

export default LabeledIcon
