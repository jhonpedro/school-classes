import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaUserCircle, FaCameraRetro } from 'react-icons/fa'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axios from '../../services/axios'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Input from '../../components/Input'

import {
	UserContainer,
	UserContent,
	ButtonsContainer,
	ButtonsContent,
	UserPhoto,
	UserAnimation,
	UserPhotoEdit,
} from './styles'

function User() {
	const userFromRedux = useSelector((state) => state.auth.user)
	const user = { ...userFromRedux }
	const [userToEdit, setUserToEdit] = useState({
		name: user.name,
		password: '',
		newPassword: '',
		confirmNewPassword: '',
		photo: '',
	})
	const [showToEdit, setShowToEdit] = useState(false)
	// eslint-disable-next-line
	async function handleSubmit(event) {
		event.preventDefault()

		const schema = Yup.object().shape({
			name: Yup.string()
				.min(3, 'Nome com no mínimo 3 caracteres')
				.required('Nome é obrigatório'),
			password: Yup.string()
				.min(6, 'Senha com no mínimo 6 letras')
				.required('Senha é obrigatória'),
			newPassword: Yup.string().min(6, 'Senha nova com no mínimo 6 letras'),
			confirmNewPassword: Yup.string().min(
				6,
				'Confirmação de senha com no mínimo 6 letras'
			),
		})
		try {
			await schema.validate(userToEdit, { abortEarly: false })

			if (userToEdit.newPassword !== userToEdit.confirmNewPassword) {
				return toast.error('Senhas diferentes')
			}

			await axios.put(`/users/${user.id}`, {
				name: userToEdit.name,
				lastPassword: userToEdit.password,
				newPassword: userToEdit.newPassword,
			})

			if (userToEdit.photo) {
				const userPhoto = new FormData()
				userPhoto.append('photo', userToEdit.photo)
				userPhoto.append('id', user.id)
				await axios.post('/photos/user', userPhoto, {
					headers: {
						'Content-type': 'multipart/formdata',
					},
				})
			}
		} catch (error) {
			if (error.errors) {
				error.errors.map((erro) => toast.error(erro))
			}
		}
	}

	function handleEdit() {
		setShowToEdit(!showToEdit)
	}

	function handleChangeImage(event) {
		setUserToEdit({
			...userToEdit,
			photo: event.target.files[0],
		})
	}

	function handleChangeName(event) {
		setUserToEdit({
			...userToEdit,
			name: event.target.value,
		})
	}
	function handleChangePassword(event) {
		setUserToEdit({
			...userToEdit,
			password: event.target.value,
		})
	}
	function handleChangeNewPassword(event) {
		setUserToEdit({
			...userToEdit,
			newPassword: event.target.value,
		})
	}
	function handleChangeConfirmPassword(event) {
		setUserToEdit({
			...userToEdit,
			confirmNewPassword: event.target.value,
		})
	}

	return (
		<>
			<Header showLogout />
			<UserContainer>
				<UserContent expand={showToEdit}>
					{showToEdit ? (
						<UserAnimation>
							<UserPhotoEdit>
								<label htmlFor="inputFile">
									<FaCameraRetro />
									<input
										type="file"
										id="inputFile"
										onChange={handleChangeImage}
									/>
								</label>
							</UserPhotoEdit>
							<Input
								placeholder="Nome"
								value={user.name}
								onChange={handleChangeName}
							/>
							<Input placeholder="Email" value={user.email} disabled />
							<Input
								type="password"
								placeholder="Senha antiga"
								value={user.lastPassword}
								onChange={handleChangePassword}
							/>
							<Input
								type="password"
								placeholder="Nova senha"
								value={user.newPassword}
								onChange={handleChangeNewPassword}
							/>
							<Input
								type="password"
								placeholder="Repita a nova senha"
								value={user.confirmNewPassword}
								onChange={handleChangeConfirmPassword}
							/>
						</UserAnimation>
					) : (
						<UserAnimation left>
							<UserPhoto>
								{user.photo ? (
									<>
										<img src={user.photo} alt={`Foto de ${user.name}`} />
										<strong>{user.name}</strong>
									</>
								) : (
									<FaUserCircle />
								)}
							</UserPhoto>
							<p>
								E-mail: <strong>{user.email}</strong>
							</p>
						</UserAnimation>
					)}
				</UserContent>
				<ButtonsContainer>
					{showToEdit ? (
						<ButtonsContent>
							<Button onClick={handleSubmit}>Salvar</Button>
							<Button onClick={handleEdit}>Cancelar</Button>
						</ButtonsContent>
					) : (
						<ButtonsContent left>
							<Button onClick={handleEdit}>Editar</Button>
						</ButtonsContent>
					)}
				</ButtonsContainer>
			</UserContainer>
		</>
	)
}

export default User
