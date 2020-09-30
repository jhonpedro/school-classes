import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaUserCircle, FaCameraRetro } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import axios from '../../services/axios'
import history from '../../services/history'

import * as actions from '../../store/modules/auth/actions'

import Header from '../../components/Header'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import Input from '../../components/Input'

import {
	StudentContaier,
	UserContent,
	ButtonContainer,
	UserHeader,
	UserPhoto,
	UserHeaderEdit,
	UserPhotoEdit,
} from './styles'

function Student() {
	const [student, setStudent] = useState()
	const [studentToEdit, setStudentToEdit] = useState()
	const [isLoadding, setIsLoadding] = useState(true)
	const [showToEdit, setShowToEdit] = useState(false)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get(`/students/${id}`)
			.then(({ data: studentFromDB }) => {
				setStudent(studentFromDB)
				setStudentToEdit(studentFromDB)
				setIsLoadding(false)
			})
			.catch(() => {
				history.push('/students')
			})
	}, [id, showToEdit])

	async function handlePushEdit(event) {
		event.preventDefault()

		const studentDataToEdit = new FormData()

		studentDataToEdit.append('photo', studentToEdit.image)
		studentDataToEdit.append('id', studentToEdit.id)
		try {
			console.log({ ...studentToEdit })
			await axios.put(`students/${student.id}`, { ...studentToEdit })
			if (studentDataToEdit.image) {
				await axios.post(`/photos/student/`, studentDataToEdit, {
					headers: {
						'Content-type': 'multipart/formdata',
					},
				})
			}
			setShowToEdit(false)
		} catch (error) {
			toast.error('Permisão negada, tente novamente!')
			dispatch(actions.loginFailure())
		}
	}

	function handleEdit() {
		setShowToEdit(!showToEdit)
	}

	function handleDelete() {
		axios.delete(`/students/${student.id}`)
		history.push('/students')
	}

	function handleChangeNameToEdit(event) {
		setStudentToEdit({
			...studentToEdit,
			name: event.target.value,
		})
	}

	function handleChangeEmailToEdit(event) {
		setStudentToEdit({
			...studentToEdit,
			email: event.target.value,
		})
	}

	function handleChangeAgeToEdit(event) {
		setStudentToEdit({
			...studentToEdit,
			age: event.target.value,
		})
	}

	function handleChangeImageToEdit(event) {
		setStudentToEdit({
			...studentToEdit,
			image: event.target.files[0],
		})
	}
	return (
		<>
			<Header showLogout />
			<StudentContaier>
				{student ? (
					<>
						<UserContent showToEdit={showToEdit}>
							{showToEdit ? (
								<UserHeaderEdit showToEdit={showToEdit}>
									<UserPhotoEdit>
										<label htmlFor="fileInput">
											<FaCameraRetro />
											<input
												type="file"
												id="fileInput"
												onChange={handleChangeImageToEdit}
											/>
										</label>
										{studentToEdit.image && (
											<p>
												Imagem: <strong>{studentToEdit.image.name}</strong>{' '}
												selecionada
											</p>
										)}
									</UserPhotoEdit>
									<Input
										placeholder="Nome"
										value={studentToEdit.name}
										onChange={handleChangeNameToEdit}
									/>
									<Input
										placeholder="E-mail"
										value={studentToEdit.email}
										onChange={handleChangeEmailToEdit}
									/>
									<Input
										placeholder="Idade"
										value={studentToEdit.age}
										onChange={handleChangeAgeToEdit}
									/>
								</UserHeaderEdit>
							) : (
								<UserHeader showToEdit={showToEdit}>
									<UserPhoto>
										{student.Students_photos[0] ? (
											<img
												src={student.Students_photos[0].link}
												alt={`Foto ${student.name}`}
											/>
										) : (
											<FaUserCircle />
										)}
									</UserPhoto>
									<p>
										<strong>{`${student.name} ${student.last_name}`}</strong>
										<br />
										<small>{`${student.email}`}</small>
										<br />
										<small>Idade: {student.age}</small>
									</p>
								</UserHeader>
							)}
						</UserContent>
						<ButtonContainer>
							{showToEdit ? (
								<>
									<Button onClick={handleEdit}>Cancelar</Button>
									<Button onClick={handlePushEdit}>Salvar</Button>
								</>
							) : (
								<>
									<Button onClick={handleEdit}>Editar</Button>
									<Button onClick={handleDelete}>Excluir</Button>
								</>
							)}
						</ButtonContainer>
					</>
				) : (
					<Loading isLoadding={isLoadding} />
				)}
			</StudentContaier>
		</>
	)
}

export default Student
