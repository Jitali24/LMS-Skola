import express from 'express'
import { authUser, createUser } from '../controller/userController'

const router = express.Router()

router.post('/signup', createUser)
router.post('/login', authUser)

export default router
