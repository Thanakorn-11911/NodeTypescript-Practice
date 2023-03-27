import { Router} from 'express'
import CtrlAuth from '../../controller/auth.controller'

const router = Router()

router.post('/singIn', CtrlAuth.singIn)

export default router