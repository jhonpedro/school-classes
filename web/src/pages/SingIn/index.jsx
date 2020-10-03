import React, { useState } from 'react'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { get } from 'lodash'

import history from '../../services/history'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Loading from '../../components/Loading'

import * as actions from '../../store/modules/auth/actions'

import {
	SingInContainer,
	SingInContainerContent,
	SingInBox,
	SideText,
	SingInBoxButtons,
} from './styles'

function SingInPage(props) {
	const dispatch = useDispatch()
	const prevPath = get(props, 'location.state.prevPath', '/students')
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	async function handleSubmit(event) {
		try {
			event.preventDefault()

			const schema = Yup.object().shape({
				email: Yup.string()
					.email('Seu email é inválido')
					.required('Email é obrigatório'),
				password: Yup.string()
					.min(6, 'Senha com no mínimo 6 caracteres')
					.required('A senha é obrigatória'),
			})

			await schema.validate(formData, { abortEarly: false })

			dispatch(
				actions.loginRequest({
					email: formData.email,
					password: formData.password,
					prevPath,
				})
			)
		} catch (error) {
			if (error.errors) {
				error.errors.map((erro) => toast.error(`Erro: ${erro}`))
			}
		}
	}

	function handleSingUp() {
		history.push('/singup')
	}

	function handleChangeEmail(event) {
		setFormData({
			...formData,
			email: event.target.value,
		})
	}

	function handleChangePassword(event) {
		setFormData({
			...formData,
			password: event.target.value,
		})
	}

	return (
		<>
			<SingInContainer>
				<Loading />
				<Header showSingIn />
				<SingInContainerContent className="container">
					<SideText>
						Entrar na sua conta <br />
						<p className="downText">Digite seus dados para efetuar o login</p>
					</SideText>
					<SingInBox onSubmit={handleSubmit}>
						<Input
							placeholder="E-mail"
							value={formData.email}
							onChange={handleChangeEmail}
							autoFocus
						/>
						<Input
							type="password"
							placeholder="Senha"
							value={formData.password}
							onChange={handleChangePassword}
						/>
						<SingInBoxButtons>
							<Button type="button" onClick={handleSingUp}>
								Cadastre-se
							</Button>
							<Button type="submit">Entrar</Button>
						</SingInBoxButtons>
					</SingInBox>
				</SingInContainerContent>
			</SingInContainer>
		</>
	)
}

export default SingInPage
