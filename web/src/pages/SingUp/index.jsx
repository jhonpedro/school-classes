import React, { useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axios from '../../services/axios'

import history from '../../services/history'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {
	SingUpContainer,
	SingUpContainerContent,
	SingUpBox,
	SideText,
	SingUpBoxButtons,
} from './styles'

function SingUpPage() {
	const [formData, setFormData] = useState({
		name: '',
		password: '',
		email: '',
	})

	async function handleSubmit(event) {
		try {
			event.preventDefault()

			const schema = Yup.object().shape({
				name: Yup.string()
					.min(3, 'Nome com no mínimo 3 letras')
					.required('Nome obrigatório'),
				email: Yup.string()
					.email('Email inválido')
					.required('Email é obrigatório'),
				password: Yup.string()
					.min(6, 'Senha com no mínimo 6 caracteres')
					.required('Senha obrigatória'),
			})

			await schema.validate(formData, { abortEarly: false })

			axios.post('/users', formData)

			history.push('/singin')
		} catch (error) {
			if (error.errors) {
				error.errors.map((message) => toast.error(`Erro: ${message}`))
			}
		}
	}

	function handleSingIn() {
		history.push('singin')
	}

	function handleChange(event, keyToChange) {
		switch (keyToChange) {
			case 'name': {
				setFormData({
					...formData,
					name: event.target.value,
				})
				break
			}
			case 'email': {
				setFormData({
					...formData,
					email: event.target.value,
				})
				break
			}
			case 'password': {
				setFormData({
					...formData,
					password: event.target.value,
				})
				break
			}
			default:
		}
	}

	return (
		<>
			<SingUpContainer>
				<Header showSingUp />
				<SingUpContainerContent className="container">
					<SideText>
						Cadastrar <br />
						<p className="downText">
							Digite seus dados para nós criarmos uma conta para você
						</p>
					</SideText>
					<SingUpBox onSubmit={handleSubmit}>
						<Input
							placeholder="Nome"
							value={formData.name}
							onChange={(event) => handleChange(event, 'name')}
						/>
						<Input
							placeholder="E-mail"
							value={formData.email}
							onChange={(event) => handleChange(event, 'email')}
						/>
						<Input
							placeholder="Senha"
							type="password"
							value={formData.password}
							onChange={(event) => handleChange(event, 'password')}
						/>
						<SingUpBoxButtons>
							<Button type="button" onClick={handleSingIn}>
								Logar
							</Button>
							<Button type="submit">Cadastrar</Button>
						</SingUpBoxButtons>
					</SingUpBox>
				</SingUpContainerContent>
			</SingUpContainer>
		</>
	)
}

export default SingUpPage
