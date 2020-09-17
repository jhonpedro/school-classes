import React from 'react'

import Header from '../../components/Header'
import Input from '../../components/Input'

import {
	LoginContainer,
	LoginContainerContent,
	LoginBox,
	SideText,
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
						<Input placeholder="E-mail" />
						<Input placeholder="Senha" />
					</LoginBox>
				</LoginContainerContent>
			</LoginContainer>
		</>
	)
}

export default LoginPage
