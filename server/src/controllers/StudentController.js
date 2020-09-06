import Student from '../models/Student'
import StudentPhoto from '../models/StudentPhoto'

class StudentsController {
  async index(req, res) {
    const student = await Student.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'last_name',
        'age',
      ],
      order: [
        ['created_at', 'DESC'],
        [StudentPhoto, 'id', 'DESC'],
      ],
      include: {
        model: StudentPhoto,
        attributes: [
          'filename',
          'link',
        ],
      },
    })
    res.json(student)
  }

  async store(req, res) {
    const {
      name, lastName, email, age,
    } = req.body

    if (!name || !lastName || !email || !age) {
      return res.status(400).json({ error: 'missing params' })
    }

    try {
      const newStudent = await Student.create({
        name,
        last_name: lastName,
        email,
        age,
      })

      return res.json(newStudent)
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error: error.message })
    }
  }

  async show(req, res) {
    const { id } = req.params
    try {
      if (!id) {
        res.status(400).json({ error: 'missing params' })
      }

      const student = await Student.findByPk(id, {
        attributes: [
          'id',
          'name',
          'email',
          'last_name',
          'age',
        ],
        include: {
          model: StudentPhoto,
          attributes: [
            'filename',
            'link',
          ],
        },
      })

      return res.json(student)
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error: error.message })
    }
  }

  async update(req, res) {
    const { id } = req.params

    const {
      name, lastName, email, age,
    } = req.body

    try {
      if (!id) {
        res.status(400).json({ error: 'missing params' })
      }

      const student = await Student.update({
        name,
        lastName,
        email,
        age,
      }, {
        where: {
          id,
        },
      })

      return res.json(student)
    } catch (error) {
      console.log(error)
      return res.status(404).json({ error: error.message })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ error: 'missing params' })
    }

    const operationIsConcluded = await Student.destroy({
      where: {
        id,
      },
    })

    return res.json(operationIsConcluded === 1)
  }
}

export default new StudentsController()
