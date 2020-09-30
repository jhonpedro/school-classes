import styled from 'styled-components'

export const StudentContainer = styled.section`
	width: 100%;
	max-width: 50rem;

	border-radius: 1rem;
	padding: 2rem 0 0;
	font-size: 1.2rem;
`

export const UserContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	color: var(--color-text-white);

	> svg {
		font-size: 4rem;
	}

	> img {
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
	}

	> a {
		color: var(--color-text-white);
		font-size: 2rem;
	}
`
