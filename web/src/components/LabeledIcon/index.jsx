import React from 'react'

import { Container } from './styles'

function LabeledIcon({ labelName, component: Icon }) {
	return (
		<Container>
			{Icon}
			<p>{labelName}</p>
		</Container>
	)
}

export default LabeledIcon
