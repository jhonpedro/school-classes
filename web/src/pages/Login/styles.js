import styled from 'styled-components'

export const LoginContainer = styled.main`
	width: 100vw;
	height: 100vh;
`

export const LoginContainerContent = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;

	height: 90vh;

	@media (min-width: 992px) {
		flex-direction: row;
		justify-content: space-between;
	}
`
export const SideText = styled.div`
	font-size: 4.5rem;
	color: var(--color-primary);
	max-width: 50rem;

	.downText {
		font-size: 2.5rem;
		color: var(--color-text-white);
	}
`

export const LoginBox = styled.form`
	height: 35%;
	width: 100%;
	margin-top: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 4rem;
	background-color: var(--color-primary);
	border-radius: 0.9rem;

	@media (min-width: 992px) {
		width: 50%;
	}
`
