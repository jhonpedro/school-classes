import styled, { keyframes } from 'styled-components'

export const LoadingContainer = styled.main`
	height: 100vh;
	width: 100vw;
	position: absolute;
	background-color: var(--color-dark);
	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: center;
`
const loopCircle = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`

export const LoopCircle = styled.span`
	padding: 1rem;
	border: 3px solid rgba(0, 0, 0, 0.1);
	border-left-color: var(--color-primary);
	border-radius: 50%;
	animation: ${loopCircle} 600ms linear infinite;
`
