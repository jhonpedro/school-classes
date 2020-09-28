import { Router } from 'express'
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

const router = new Router()

// router.get('/', userController.index)

router.post('/', userController.store)
router.get('/:id', userController.show)
router.put('/:id', loginRequired, userController.update)
router.post('/delete/:id', loginRequired, userController.delete)

export default router
