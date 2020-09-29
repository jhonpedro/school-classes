import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'

export default createGlobalStyle`
	:root {
		font-size: 60%;

		--color-primary: #C3073F;
		--color-primary-darker: #8a072e;
		--color-light: #e8e9eb;
		--color-dark: #343a40;
		--color-toast-success: #0197F6;
		--color-toast-error: #FF9122;
		--color-toast-warning: #F2AF29;
		--color-text-white: #f8f9fa;
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
		position: fixed;
	}

	a {
		text-decoration: none;
	}

	input {
		font-family: Poppins;
	}

	.container {
		width: 90vw;
	}

	.Toastify__toast {
		font-family: Poppins;
		font-size: 1.3rem;
	}

	.Toastify .Toastify__toast-container .Toastify__toast--success {
		background-color: var(--color-toast-success);
	}
	.Toastify .Toastify__toast-container .Toastify__toast--error {
		background-color: var(--color-toast-error);
	}
	.Toastify .Toastify__toast-container .Toastify__toast--warn {
		background-color: var(--color-toast-warning);
	}
`
