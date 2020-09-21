import styled, { keyframes } from 'styled-components'

export const Container = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	color: var(--color-text-white);
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

export const Content = styled.section`
	width: 50%;
	height: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;

	animation: ${appearFromLeft} 1s;

	@media (min-width: 992px) {
		width: 75%;
		flex-direction: row;
	}
`

export const About = styled.article`
	font-size: 2rem;
	font-family: Lobster;
	letter-spacing: 0.09rem;
	margin-bottom: 2.5rem;

	.colorful {
		color: var(--color-primary);
		font-size: 3.5rem;
		margin-bottom: 2.5rem;
	}

	@media (min-width: 992px) {
		font-size: 2.5rem;
		.colorful {
			font-size: 4.5rem;
		}
	}
`

export const Redirect = styled.button`
	width: 100%;
	font-family: Poppins;
	font-size: 2rem;
	padding: 2.5rem;
	border: 0;
	border-radius: 0.7rem;
	background-color: var(--color-primary);
	color: var(--color-text-white);
	transition: background-color 0.2s;
	cursor: pointer;

	:hover {
		background-color: var(--color-primary-darker);
	}

	@media (min-width: 992px) {
		width: 50%;
		font-size: 2.1rem;
	}
`
