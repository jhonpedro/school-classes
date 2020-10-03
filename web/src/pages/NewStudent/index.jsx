import React, { useState } from 'react'
import { FaCameraRetro, FaUserCheck, FaUserTimes } from 'react-icons/fa'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import history from '../../services/history'
import axios from '../../services/axios'

import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LabeledIcon from '../../components/LabeledIcon'

import {
	NewStudentContainer,
	NewStudentContent,
	NewStudentPhotoContent,
	ButtonsContainer,
} from './styles'

function NewStudent() {
	const [newStudent, setNewStudent] = useState({
		name: '',
		lastName: '',
		email: '',
		age: '',
		photo: '',
	})

	async function handleSaveNewStudent(event) {
		event.preventDefault()

		const schema = Yup.object().shape({
			name: Yup.string()
				.min(3, 'Nome com no mínimo 3 caracteres')
				.required('Nome obrigatório'),
			lastName: Yup.string()
				.min(3, 'Nome com no mínimo 3 caracteres')
				.required('Sobrenome obrigatório'),
			email: Yup.string()
				.email('Seu e-mail é inválido')
				.required('E-mail obrigatório'),
			age: Yup.number()
				.integer('O número deve ser inteiro')
				.required('Idade é obrigatória'),
		})

		try {
			await schema.validate(newStudent, { abortEarly: false })

			const savedStudent = await axios.post('/students/', newStudent)

			if (newStudent.photo) {
				const userToCreate = new FormData()
				userToCreate.append('photo', newStudent.photo)
				userToCreate.append('id', savedStudent.data.id)
				await axios.post('/photos/student/', userToCreate, {
					headers: {
						'Content-type': 'multipart/formdata',
					},
				})
			}

			history.push('/students')
		} catch (error) {
			if (error.errors) {
				error.errors.map((erro) => toast.error(erro))
			}
		}
	}

	function handleChangeName(event) {
		setNewStudent({
			...newStudent,
			name: event.target.value,
		})
	}
	function handleChangeLastName(event) {
		setNewStudent({
			...newStudent,
			lastName: event.target.value,
		})
	}
	function handleChangeEmail(event) {
		setNewStudent({
			...newStudent,
			email: event.target.value,
		})
	}
	function handleChangeAge(event) {
		setNewStudent({
			...newStudent,
			age: event.target.value,
		})
	}
	function handleChangeImage(event) {
		setNewStudent({
			...newStudent,
			photo: event.target.files[0],
		})
	}

	function handleCancel() {
		history.goBack()
	}

	return (
		<>
			<Header showLogout />
			<NewStudentContainer>
				<NewStudentContent>
					<NewStudentPhotoContent>
						<label htmlFor="inputFile">
							<FaCameraRetro />
							<input type="file" id="inputFile" onChange={handleChangeImage} />
						</label>
						{newStudent.photo && (
							<p>
								Imagem: <strong>{newStudent.photo.name}</strong> selecionada
							</p>
						)}
					</NewStudentPhotoContent>
					<Input placeholder="Nome" onChange={handleChangeName} />
					<Input placeholder="Sobrenome" onChange={handleChangeLastName} />
					<Input placeholder="E-mail" onChange={handleChangeEmail} />
					<Input placeholder="Idade" type="number" onChange={handleChangeAge} />
					<ButtonsContainer>
						<Button onClick={handleSaveNewStudent}>
							<LabeledIcon labelName="Salvar" component={<FaUserCheck />} />
						</Button>
						<Button onClick={handleCancel}>
							<LabeledIcon labelName="Cancelar" component={<FaUserTimes />} />
						</Button>
					</ButtonsContainer>
				</NewStudentContent>
			</NewStudentContainer>
		</>
	)
}

export default NewStudent
