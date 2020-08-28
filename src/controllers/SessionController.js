import JWT from 'jsonwebtoken'
import User from '../models/User'

class SessionController {
  async login(req, res) {
    const { email, password } = req.body

    try {
      if (!email || !password) {
        return res.status(401).json({ error: 'missing params' })
      }

      const user = await User.findOne({
        where: {
          email,
        },
      })

      const isPasswordValid = await user.passwordIsValid(password)
      if (!user || !isPasswordValid) {
        return res.status(400).json({ error: 'user with wrong credentials' })
      }

      JWT.sign({ user_id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN },
        (error, token) => {
          if (error) return res.status(400).json({ error: 'error in token creation' })

          return res.json({ token })
        })
      return null
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: 'wow something went wrong' })
    }
  }
}

export default new SessionController()
