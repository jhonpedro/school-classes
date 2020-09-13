import React from 'react'
import { useDispatch } from 'react-redux'

import { Container, Content } from './styles'
import * as actionTypes from '../../store/modules/sample/actions'

function Page404() {
	const dispatch = useDispatch((state) => state.sampleReducer.click)

	function handleClick() {
		dispatch(actionTypes.buttonClickRequest())
	}
	return (
		<Container>
			<Content>
				<p className="colorful">
					Opá, parece que você chegou na borda da nossa plataforma
				</p>
				Tente voltar pra página principal, por aqui não há nada
				<button type="button" onClick={handleClick}>
					Clique
				</button>
			</Content>
		</Container>
	)
}

export default Page404
