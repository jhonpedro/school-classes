import React from 'react'
import PropTypes from 'prop-types'

import { LoadingContainer, LoopCircle } from './styles'

function Loading({ isLoadding }) {
	if (isLoadding) {
		return (
			<LoadingContainer>
				<LoopCircle />
			</LoadingContainer>
		)
	}

	return <></>
}

Loading.defaultProps = {
	isLoadding: false,
}

Loading.propTypes = {
	isLoadding: PropTypes.bool,
}

export default Loading
