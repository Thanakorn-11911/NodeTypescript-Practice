import { Router } from 'express'
import ApiLab from './module/lab'
import ApiAuth from './module/auth'

const router = Router()

router.use('/auth', ApiAuth)

// router.use('/codeLab', ApiLab)

export default router