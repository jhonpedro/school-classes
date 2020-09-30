import styled, { css, keyframes } from 'styled-components'

export const StudentContaier = styled.section`
	height: 90vh;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const UserContent = styled.article`
	width: 70%;
	padding: 5rem;

	display: flex;
	justify-content: center;

	border-radius: 0.7rem;
	box-shadow: 0 0 5px black;

	background-color: var(--color-light);

	${(props) =>
		props.showToEdit &&
		css`
			height: 37rem;
		`}
`

export const InputContainer = styled.div`
	width: 70%;
	padding: 2rem 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`
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

export const UserHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: ${appearFromLeft} 0.5s ease-in-out;

	p strong {
		font-size: 1.5rem;
	}

	p strong + strong {
		font-size: 1rem;
	}

	p small {
		font-size: 1rem;
	}
`

export const UserPhoto = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;

	> img {
		border-radius: 50%;
		height: 6rem;
		width: 6rem;
	}

	font-size: 6rem;
`

export const UserHeaderEdit = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.5rem;
	color: black;

	animation: ${appearFromRight} 0.5s ease-in-out;

	label {
		font-size: 5rem;
		cursor: pointer;
	}

	label > input {
		display: none;
	}
`

export const UserPhotoEdit = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin: 0.5rem 0;
	p {
		font-size: 0.9rem;
	}
`
