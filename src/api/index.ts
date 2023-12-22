import { Router } from 'express'
import ApiLab from './module/lab'
import ApiAuth from './module/auth'
import ApiOTP from './module/OTP'

const router = Router()

// router.use('/codeLab', ApiLab)
router.use('/auth', ApiAuth)
// router.use('/otp', ApiOTP)




export default router