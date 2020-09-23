import JWT from 'jsonwebtoken'
import User from '../models/User'

class SessionController {
	async login(req, res) {
		const { email: reqEmail, password } = req.body

		try {
			if (!reqEmail || !password) {
				return res.status(401).json({ error: 'missing params' })
			}

			const user = await User.findOne({
				where: {
					email: reqEmail,
				},
			})

			const isPasswordValid = user && (await user.passwordIsValid(password))
			if (!user || !isPasswordValid) {
				return res.status(400).json({ error: 'user with wrong credentials' })
			}

			const { id, name, email } = user

			const payloadJWT = {
				id,
				name,
				email,
			}

			JWT.sign(
				payloadJWT,
				process.env.JWT_SECRET,
				{ expiresIn: process.env.JWT_EXPIRES_IN },
				(error, token) => {
					if (error)
						return res.status(400).json({ error: 'error in token creation' })

					return res.json({ token, user: { id, name, email } })
				}
			)
			return null
		} catch (error) {
			console.log(error)
			return res.status(400).json({ error: 'wow something went wrong' })
		}
	}
}

export default new SessionController()
