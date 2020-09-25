import React from 'react'
import PropTypes from 'prop-types'
import { FaUserCircle, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { StudentContainer, UserContent } from './styles'

function Student({ id, name, lastName, email, age, photo }) {
	return (
		<StudentContainer>
			<UserContent>
				{photo ? <img src={photo} alt={`Foto ${name}`} /> : <FaUserCircle />}
				<span>
					{`${name.charAt(0).toUpperCase() + name.slice(1)} ${lastName}`}
				</span>
				<span>{email.toLowerCase()}</span>
				<span>{age}</span>
				<Link to={`/student/${id}`}>
					<FaEdit />
				</Link>
			</UserContent>
		</StudentContainer>
	)
}

Student.defaultProps = {
	photo: '',
}

Student.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	photo: PropTypes.string,
}

export default Student
