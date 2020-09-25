import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'

import { Container, ContentSide, UserSideContent } from './styles'
import LabeledIcon from '../LabeledIcon'

function Header({ showLogin, showLogout }) {
	const [user, setUser] = useState()
	const auth = useSelector((state) => state.auth)

	useEffect(() => {
		if (!isEmpty(auth.user)) {
			setUser(auth.user)
		}
	}, [auth])

	return (
		<Container>
			<ContentSide>
				<Link to="/">
					<LabeledIcon labelName="Home" component={<FaHome />} />
				</Link>
			</ContentSide>

			<ContentSide>
				{showLogin && (
					<Link to="/singin">
						<LabeledIcon labelName="Entrar" component={<FaSignInAlt />} />
					</Link>
				)}
				{user !== undefined && (
					<Link to={`/users/${user.id}`}>
						<UserSideContent>
							{user.photo ? (
								<>
									<img src={user.photo} alt={`Foto de ${user.name}`} />
									<span>{user.name}</span>
								</>
							) : (
								<LabeledIcon
									labelName={user.name}
									component={<FaUserCircle />}
								/>
							)}
						</UserSideContent>
					</Link>
				)}

				{showLogout && (
					<LabeledIcon labelName="Sair" component={<FaSignOutAlt />} />
				)}
			</ContentSide>
		</Container>
	)
}

Header.defaultProps = {
	showLogin: false,
	showLogout: false,
}

Header.propTypes = {
	showLogin: PropTypes.bool,
	showLogout: PropTypes.bool,
}

export default Header
