import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function LabeledIcon({ labelName, component: Icon }) {
	return (
		<Container>
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
