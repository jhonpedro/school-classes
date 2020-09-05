import { Router } from 'express'
import loginRequired from '../middlewares/loginRequired'
import photoController from '../controllers/PhotoController'

const router = new Router()

router.post('/user/', loginRequired, photoController.storeUser)
router.post('/student/', loginRequired, photoController.storeStudent)

export default router;
