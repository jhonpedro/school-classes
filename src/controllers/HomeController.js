import Student from '../models/Student'

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Joao',
      age: 12,
      email: 'test',
      last_name: 'pedro',
    })

    res.json({ newStudent })
  }
}

export default new HomeController()
