import { Router } from 'express'
import userController from '../controllers/UserController'

const router = new Router()

router.post('/', userController.store)
router.get('/', userController.index)
router.get('/:id', userController.show)
router.post('/:id', userController.update)
router.post('/delete/:id', userController.delete)

export default router;
