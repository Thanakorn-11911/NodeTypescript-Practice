import express, {Response, Request, Application} from 'express'
import bodyParser from 'body-parser'

import ApiRouter from './api/index'

const app: Application = express()
const port = 3002

app.use(bodyParser.json());

app.use('/api', ApiRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})