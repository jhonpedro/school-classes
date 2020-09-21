import styled from 'styled-components'

export const Button = styled.button`
	padding: 1rem 2rem;
	font-size: 1.5rem;
	color: var(--color-light);
	background: var(--color-primary-darker);
	transition: 0.2s;
	border: 0;
	border-radius: 0.7rem;
	cursor: pointer;

	:hover {
		background-color: var(--color-light);
		border-color: var(--color-primary-darker);
		color: var(--color-primary);
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
	}
`
