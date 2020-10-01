import styled, { keyframes, css } from 'styled-components'

const appearFromLeft = keyframes`
	from {
		transform: translateX(-10rem);
		opacity:0;
	}
	to {
		transform: translateX(0);
		opacity:1;
	}
`
const appearFromRight = keyframes`
	from {
		transform: translateX(10rem);
		opacity:0;

	}
	to {
		transform: translateX(0);
		opacity:1;
	}
`

export const UserContainer = styled.section`
	height: 90vh;
	width: 100vw;
	padding: 4rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const UserContent = styled.article`
	height: 25rem;
	width: 70%;
	transition: all 0.5s ease-in;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: var(--color-light);
	border-radius: 0.7rem;

	${(props) =>
		props.expand &&
		css`
			height: 45rem;
			width: 70%;
		`}
`

export const UserPhoto = styled.div`
	font-size: 6rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	img {
		border-radius: 50%;
		height: 6rem;
		width: 6rem;
	}

	p,
	strong {
		font-size: 1.5rem;
	}
`

export const UserPhotoEdit = styled.div`
	label {
		font-size: 6rem;
	}

	input {
		display: none;
	}
`

export const UserAnimation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	${(props) => {
		if (props.left) {
			return css`
				animation: ${appearFromLeft} 0.5s ease-in;
			`
		}

		return css`
			animation: ${appearFromRight} 0.5s ease-in;
		`
	}}
`

export const ButtonsContainer = styled.div`
	width: 70%;
	padding: 2rem 0 0;
`

export const ButtonsContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row-reverse;

	${(props) => {
		if (props.left) {
			return css`
				animation: ${appearFromLeft} 0.5s ease-in;
			`
		}
		return css`
			animation: ${appearFromRight} 0.5s ease-in;
		`
	}}
`
