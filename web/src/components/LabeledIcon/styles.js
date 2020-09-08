import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 2.5rem;
	color: var(--color-text-white);
	transition: color 0.2s;

	p {
		font-size: 1.5rem;
		margin-left: 1rem;
	}

	:hover {
		color: var(--color-text-light);
	}
`
