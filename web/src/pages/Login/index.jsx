import React from 'react'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {
	LoginContainer,
	LoginContainerContent,
	LoginBox,
	SideText,
	LoginBoxButtons,
} from './styles'

function LoginPage() {
	return (
		<>
			<LoginContainer>
				<Header showLogin />
				<LoginContainerContent className="container">
					<SideText>
						Login <br />
						<p className="downText">Digite seus dados para efetuar o login</p>
					</SideText>
					<LoginBox>
						<Input placeholder="E-mail" autoFocus />
						<Input placeholder="Senha" />
						<LoginBoxButtons>
							<Button type="submit">Cadastre-se</Button>
							<Button type="submit">Login</Button>
						</LoginBoxButtons>
					</LoginBox>
				</LoginContainerContent>
			</LoginContainer>
		</>
	)
}

export default LoginPage
