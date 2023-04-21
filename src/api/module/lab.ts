import { Router} from 'express'
import CtrlLab from '../../controller/lab'

const router = Router()

router.post('/waterBill',CtrlLab.waterBill)
router.post('/scsApi',CtrlLab.scsApi)

export default router