import multer from 'multer'
import multerConfig from '../config/multer'
import Photo from '../models/Photo'

const upload = multer(multerConfig).single('photo')

class HomeController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        console.log(error)
        return res.status(400).json({ error: error.message })
      }
      try {
        const { originalname, filename } = req.file
        const { id } = req.body

        const photo = await Photo.create({
          originalname,
          filename,
          student_id: id,
        })

        return res.json(photo)
      } catch (errorFromCatch) {
        console.log(errorFromCatch)
        return res.status(400).json({ error: 'something went wrong' })
      }
    })
  }
}

export default new HomeController()
