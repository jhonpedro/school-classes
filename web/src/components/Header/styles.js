import styled from 'styled-components'

export const Container = styled.nav`
	width: 100vw;
	background-color: var(--color-primary);
	height: 10vh;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const ContentSide = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;

	a {
		display: flex;
		justify-content: space-around;
		height: 100%;
		color: var(--color-text-white);
		transition: 0.2s;

		:hover {
			filter: brightness(85%);
		}
	}

	@media (min-width: 992px) {
		width: 15%;
	}
`

export const UserSideContent = styled.span`
	font-size: 2.5rem;
	margin: 0 1rem;
	color: var(--color-text-white);

	display: flex;
	justify-content: center;
	align-items: center;

	> img {
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 100%;
		border: 2px solid rgba(0, 0, 0, 0.3);
	}

	> span {
		font-size: 1.5rem;
		margin-left: 1rem;
	}
`
