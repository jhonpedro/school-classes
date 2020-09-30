import React, { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import axios from '../../services/axios'
import history from '../../services/history'

import Header from '../../components/Header'
import Student from '../../components/Student'
import Button from '../../components/Button'
import LabeledIcon from '../../components/LabeledIcon'
import Loading from '../../components/Loading'

import { StudentsContainer, ButtonsContainer } from './styles'

function StudentsComponent() {
	const [students, setStudents] = useState()
	const [isLoadding, setIsLoadding] = useState(true)

	useEffect(() => {
		axios.get('/students').then((studentsFromDB) => {
			setStudents(studentsFromDB.data)
			setIsLoadding(false)
		})
	}, [])

	function handleCreateStudent() {
		history.push('/students/new')
	}

	return (
		<>
			<Loading isLoadding={isLoadding} />
			<Header showLogout />
			<StudentsContainer>
				<ButtonsContainer>
					<Button onClick={handleCreateStudent}>
						<LabeledIcon
							labelName="Criar estudante"
							component={<FaUserPlus />}
						/>
					</Button>
				</ButtonsContainer>
				{students &&
					students.map((student) => {
						const photo =
							student.Students_photos[0] && student.Students_photos[0].link
						return (
							<Student
								key={student.id}
								id={student.id}
								name={student.name}
								lastName={student.last_name}
								email={student.email}
								age={student.age}
								photo={photo}
							/>
						)
					})}
			</StudentsContainer>
		</>
	)
}

export default StudentsComponent
