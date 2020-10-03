import JWT from 'jsonwebtoken'
import User from '../models/User'
import UserPhoto from '../models/UserPhoto'

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
				order: [[UserPhoto, 'id', 'DESC']],
				include: {
					model: UserPhoto,
					attributes: ['filename', 'link'],
				},
			})

			const isPasswordValid = user && (await user.passwordIsValid(password))
			if (!user || !isPasswordValid) {
				return res.status(400).json({ error: 'user with wrong credentials' })
			}

			const { id, name, email, Users_photos: userPhoto } = user
			const photo = userPhoto[0] ? userPhoto[0].link : ''

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
					if (error) {
						console.log(error)
						return res.status(400).json({ error: 'error in token creation' })
					}
					return res.json({
						token,
						user: {
							id,
							name,
							email,
							photo,
						},
					})
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
