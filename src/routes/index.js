import { Router } from 'express'
import PostRoute from './post'
import UserRoute from './user'

const router = Router()

router.use('/api/post', PostRoute)
router.use('/api/user', UserRoute)

export default router

