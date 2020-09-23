import styled, { keyframes } from 'styled-components'

export const SingInContainer = styled.main`
	width: 100vw;
	height: 100vh;
`

const appearFromLeft = keyframes`
	from {
		opacity: 0;
		transform: translateX(-10rem);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}

`

export const SingInContainerContent = styled.main`
	height: 90vh;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;

	animation: ${appearFromLeft} 1s;

	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: space-between;
	}
`
export const SideText = styled.div`
	font-size: 4.5rem;
	color: var(--color-primary);
	max-width: 50rem;

	.downText {
		font-size: 2.5rem;
		color: var(--color-text-white);
	}
`

export const SingInBox = styled.form`
	width: 100%;
	margin-top: 2rem;
	padding: 4rem 0;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	/* padding: 4rem; */
	background-color: var(--color-primary);
	border-radius: 0.9rem;

	@media (min-width: 992px) {
		width: 50%;
	}
`

export const SingInBoxButtons = styled.div`
	width: 100%;
	max-width: 49rem;

	display: flex;
	justify-content: space-between;
`
