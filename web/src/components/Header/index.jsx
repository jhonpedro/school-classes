import React, { useEffect, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import {
	FaChevronLeft,
	FaSignInAlt,
	FaSignOutAlt,
	FaUserCircle,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import * as actions from '../../store/modules/auth/actions'
import history from '../../services/history'

import { Container, ContentSide, UserSideContent } from './styles'
import LabeledIcon from '../LabeledIcon'

function Header({ showLogin, showLogout }) {
	const [user, setUser] = useState()
	const auth = useSelector((state) => state.auth)
	const location = useLocation()
	const dispatch = useDispatch()

	useEffect(() => {
		if (!isEmpty(auth.user)) {
			setUser(auth.user)
		}
	}, [auth])

	if (!isEmpty(user) && location.pathname === '/singin') {
		return <Redirect to="/students" />
	}

	function handleLogout() {
		dispatch(actions.loginFailure())
		history.push('/singin')
	}

	function handleGoBack() {
		history.goBack()
	}

	return (
		<Container>
			<ContentSide>
				<LabeledIcon
					onClick={handleGoBack}
					labelName="Voltar"
					component={<FaChevronLeft />}
				/>
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
					<LabeledIcon
						onClick={handleLogout}
						labelName="Sair"
						component={<FaSignOutAlt />}
					/>
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
