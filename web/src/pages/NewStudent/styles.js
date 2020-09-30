import styled, { keyframes } from 'styled-components'

export const NewStudentContainer = styled.section`
	height: 90vh;
	width: 100vw;
	padding: 4rem;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const appearFromUp = keyframes`
	from {
		transform: translateY(-8rem);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`

export const NewStudentContent = styled.article`
	width: 70%;
	height: 45rem;
	padding: 0 5rem;

	display: flex;
	justify-content: center;
	flex-direction: column;

	border-radius: 0.7rem;
	box-shadow: 0 0 5px black;

	background-color: var(--color-light);

	animation: ${appearFromUp} 0.7s ease-in-out;

	@media (max-width: 600px) {
		height: 50rem;
	}
`

export const NewStudentPhotoContent = styled.div`
	font-size: 6rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem 0;

	label {
		display: flex;
		align-items: center;
	}

	label > input {
		display: none;
	}

	label:hover {
		cursor: pointer;
	}

	p {
		font-size: 0.9rem;
	}
`

export const ButtonsContainer = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;

	p {
		font-size: 1.2rem;
	}

	svg {
		font-size: 2.5rem;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		button + button {
			margin: 1rem 0;
		}
	}
`
