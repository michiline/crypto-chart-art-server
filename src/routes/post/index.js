import { Router } from 'express'
import * as postController from './postController'
import { checkIsAuthor } from '../user'

const router = Router()

router.post('/',
	checkIsAuthor,
	postController.create
)

export default router