import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		font-size: 60%;

		--color-primary: #C3073F;
		--color-primary-darker: #8a072e;
		--color-dark: #343a40;
		--color-toast-success: #0197F6;
		--color-toast-error: #FF9122;
		--color-toast-warning: #F2AF29;
		--color-text-white: #f8f9fa;
		--color-text-light: #e8e9eb;
	}

	 * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body {
		font-family: Poppins;
		background-color: var(--color-dark);
	}

	html, body {
		height: 100vh;
	}

	a {
		text-decoration: none;
	}
`
