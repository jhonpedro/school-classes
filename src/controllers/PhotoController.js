import multer from 'multer'
import multerConfig from '../config/multer'

const upload = multer(multerConfig).single('photo')

class HomeController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        console.log(error)
        return res.status(400).json({ error: error.message })
      }

      return res.json('ok')
    })
  }
}

export default new HomeController()
