import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		font-size: 60%;

		--color-primary: #C3073F;
		--color-primary-dark: #343a40;
		--color-toast-success: #0197F6;
		--color-toast-error: #FF9122;
		--color-toast-warning: #F2AF29;
	}

	 * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: Poppins;
		background-color: var(--color-primary-dark);
	}

	html, body {
		height: 100vh;
	}

	a {
		text-decoration: none;
	}
`
