import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

import { Container, ContentSide } from './styles'
import LabeledIcon from '../LabeledIcon'

function Header({ showLogin, showLogout }) {
	return (
		<Container>
			<ContentSide>
				<Link to="/">
					<LabeledIcon labelName="Home" component={<FaHome />} />
				</Link>
			</ContentSide>

			<ContentSide>
				{showLogin && (
					<Link to="Login">
						<LabeledIcon labelName="Entrar" component={<FaSignInAlt />} />
					</Link>
				)}

				{showLogout && (
					<LabeledIcon labelName="Sair" component={<FaSignOutAlt />} />
				)}
			</ContentSide>
		</Container>
	)
}

export default Header
