import styled from 'styled-components'

export const StudentsContainer = styled.section`
	height: 90vh;
	width: 100vw;

	padding: 3.5rem;
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const ButtonsContainer = styled.div`
	width: 100%;
	max-width: 50rem;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	button {
		font-family: Poppins;
		font-size: 2rem;
		p {
			font-size: 1.2rem;
		}
	}

	:hover {
		button {
			div {
				color: var(--color-primary);
			}
		}
	}
`
