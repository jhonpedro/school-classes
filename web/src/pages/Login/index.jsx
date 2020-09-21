import React, { useState } from 'react'

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
	const [register, setRegister] = useState(false)

	return (
		<>
			<LoginContainer>
				<Header showLogin />
				<LoginContainerContent className="container">
					{register ? (
						<>
							<SideText>
								Cadastrar <br />
								<p className="downText">
									Digite seus dados para nós sabermos quem é você
								</p>
							</SideText>
							<LoginBox>
								<Input placeholder="Nome" />
								<Input placeholder="E-mail" />
								<Input placeholder="Senha" type="password" />
								<LoginBoxButtons>
									<Button type="button" onClick={() => setRegister(!register)}>
										Logar
									</Button>
									<Button type="submit">Cadastrar</Button>
								</LoginBoxButtons>
							</LoginBox>
						</>
					) : (
						<>
							<SideText>
								Login <br />
								<p className="downText">
									Digite seus dados para efetuar o login
								</p>
							</SideText>
							<LoginBox>
								<Input placeholder="E-mail" autoFocus />
								<Input placeholder="Senha" />
								<LoginBoxButtons>
									<Button type="button" onClick={() => setRegister(!register)}>
										Cadastre-se
									</Button>
									<Button type="submit">Login</Button>
								</LoginBoxButtons>
							</LoginBox>
						</>
					)}
				</LoginContainerContent>
			</LoginContainer>
		</>
	)
}

export default LoginPage
