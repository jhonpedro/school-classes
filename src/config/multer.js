import multer from 'multer'
import { extname, resolve } from 'path'

import randomNumber from '../utils/randomNumber'

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png ' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg') {
      return cb(new multer.MulterError('file must be an image'))
    }

    return cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${randomNumber(1, 20000)}.${extname(file.originalname)}`)
    },
  }),
}
