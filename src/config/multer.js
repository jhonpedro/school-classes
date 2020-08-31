import multer from 'multer'
import { extname, resolve } from 'path'

import randomNumber from '../utils/randomNumber'

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomNumber(1, 20000)}.${extname(file.originalname)}`)
    },
  }),
}
