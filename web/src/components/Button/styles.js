import styled from 'styled-components'

export const Button = styled.button`
	padding: 1rem 2rem;
	font-size: 1.5rem;
	color: var(--color-light);
	background: var(--color-primary-darker);
	transition: 0.2s;
	border: 1px solid var(--color-primary-darker);
	border-radius: 0.7rem;

	:hover {
		background-color: var(--color-light);
		border-color: var(--color-primary-darker);
		color: var(--color-primary);
	}
`
