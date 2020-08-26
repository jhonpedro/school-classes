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

      return res.json({ newUser })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ error: error.message })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll()

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
      return res.status(400).json({ error: error.message })
    }
  }
}

export default new HomeController()
