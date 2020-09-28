import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { LoadingContainer, LoopCircle } from './styles'

function Loading({ isLoadding }) {
	const isLoaddingFromState = useSelector((state) => state.auth.isLoadding)
	const [handleIfIsLoadding, setHandleIfIsLoadding] = useState(true)

	useEffect(() => {
		setHandleIfIsLoadding(isLoadding ? true : isLoaddingFromState)
	}, [isLoadding, isLoaddingFromState])

	return (
		<>
			{handleIfIsLoadding ? (
				<LoadingContainer>
					<LoopCircle />
				</LoadingContainer>
			) : (
				<></>
			)}
		</>
	)
}

Loading.defaultProps = {
	isLoadding: false,
}

Loading.propTypes = {
	isLoadding: PropTypes.bool,
}

export default Loading
