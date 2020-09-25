import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { LoadingContainer, LoopCircle } from './styles'

function Loading({ isLoadding }) {
	const isLoaddingFromState = useSelector((state) => state.auth.isLoadding)

	const handleIfIsLoadding = isLoadding ? true : isLoaddingFromState

	if (handleIfIsLoadding) {
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
