import React from 'react'
import Header from '../../components/Header'
import { Container, Content } from './styles'

function Page404() {
	return (
		<>
			<Header showLogin />
			<Container>
				<Content>
					<p className="colorful">
						Opá, parece que você chegou na borda da nossa plataforma
					</p>
					Tente voltar pra página principal, por aqui não há nada
				</Content>
			</Container>
		</>
	)
}

export default Page404
