import { Router } from 'express'
import ApiLab from './module/lab'

const router = Router()

router.use('/codeLab', ApiLab)

export default router