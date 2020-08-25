import User from '../models/User'

class HomeController {
  async create(req, res) {
    const { name, email, password } = req.body

    try {
      const newUser = await User.create({
        name,
        email,
        password,
      })

      res.json({ newUser })
    } catch (error) {
      res.status(400).json({ error: error.message })
      console.log(error)
    }
  }
}

export default new HomeController()
