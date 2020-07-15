import { Router } from 'express'
import * as postController from './postController'
import * as postResponder from './postResponder'
import { checkIsAdmin } from '../user'

const router = Router()

router.post('/',
	checkIsAdmin,
	postController.create,
	postResponder.create
)

export default router