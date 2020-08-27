import bcrypt from 'bcryptjs'
import User from '../models/User'

class HomeController {
  async store(req, res) {
    const { name, email, password } = req.body

    try {
      const newUser = await User.create({
        name,
        email,
        password,
      })

      newUser.password = null

      return res.json(newUser)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({
        order: [
          ['created_at', 'ASC'],
        ],
      })

      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message })
    }
  }

  async show(req, res) {
    const { id } = req.params

    try {
      const user = await User.findByPk(id)

      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.status(400).json(null)
    }
  }

  async update(req, res) {
    const {
      name, lastPassword, newPassword,
    } = req.body
    const { id } = req.params

    try {
      if (!id) {
        return res.status(401).json({ error: 'missing param' })
      }

      const user = await User.findByPk(id)
      if (!user) {
        return res.status(401).json({ error: 'missing param' })
      }
      const isLastPasswordValid = await bcrypt.compare(lastPassword, user.password_hashed)
      if (!isLastPasswordValid) {
        return res.sendStatus(403)
      }

      let newUser

      if (name && newPassword) {
        newUser = await user.update({ name, password: newPassword })
      } else if (newPassword) {
        newUser = await user.update({ password: newPassword })
      } else {
        newUser = await user.update({ name })
      }

      return res.json(newUser)
    } catch (error) {
      console.log(error)
      return res.status(401).json({ error: error.message })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      if (!id) {
        return res.status(401).json({ error: 'missing param' })
      }

      const operationIsConcluded = await User.destroy({
        where: {
          id,
        },
      })

      return res.json(operationIsConcluded === 1)
    } catch (error) {
      console.log(error)
      return res.status(401).json({ error: error.message })
    }
  }
}

export default new HomeController()
