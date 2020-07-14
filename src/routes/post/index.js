import { Router } from 'express'
import * as postController from './postController'
import { checkIsAdmin } from '../user'

const router = Router()

router.post('/',
	checkIsAdmin,
	postController.create
)

export default router