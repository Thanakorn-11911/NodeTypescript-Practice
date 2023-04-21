import { Router } from 'express'
import ApiLab from './module/lab'
import ApiAuth from './module/auth'

const router = Router()

router.use('/codeLab', ApiLab)
router.use('/auth', ApiAuth)




export default router