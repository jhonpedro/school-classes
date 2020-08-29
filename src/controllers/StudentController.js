import Student from '../models/Student'

class StudentsController {
  async index(req, res) {
    const student = await Student.findAll()
    res.json(student)
  }
}

export default new StudentsController()
