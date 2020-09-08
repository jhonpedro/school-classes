import styled from 'styled-components'

export const Container = styled.nav`
	background-color: var(--color-primary);
	padding: 20px;
	display: flex;
	justify-content: space-between;

	color: var(--color-text-white);
`

export const ContentSide = styled.div`
	width: 40%;
	a {
		display: flex;
		justify-content: space-around;
	}

	@media (min-width: 992px) {
		width: 15%;
	}
`
