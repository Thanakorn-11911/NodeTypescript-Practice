import { Router, Request, Response } from 'express'
import CtrlLab from '../../controller/lab'

const router = Router()

router.post('/waterBill',CtrlLab.waterBill)


export default router