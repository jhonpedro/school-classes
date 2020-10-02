import React from 'react'

import { Container, Content, About, Redirect } from './styles'
import history from '../../services/history'

function Landing() {
	function handleRedirectToLogin() {
		history.push('/singin')
	}

	return (
		<Container>
			<Content>
				<About>
					<p className="colorful">Olá, bem vindo a nossa plataforma!</p>
					<p>
						Essa é uma plataforma utlizada para a criaçao de estudantes,
						simulando uma escola!
					</p>
				</About>
				<Redirect onClick={handleRedirectToLogin}>Quero participar!</Redirect>
			</Content>
		</Container>
	)
}

export default Landing
