import { Router} from 'express'
import CtrlOtp from '../../controller/otp.controller'

const router = Router()

router.post('/sendotp',CtrlOtp.sendOtp)

export default router