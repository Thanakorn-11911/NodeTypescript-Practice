import express, {Application, Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'

import DB from './lib/db'
import config from './config'
import {CustomDbRequest} from './lib/interface'
import ApiRouter from './api/index'


const app: Application = express()
const port = config.server.port

const mysqldb = DB(config.mysqldb)

app.use ((req:CustomDbRequest, res:Response, next: NextFunction) => {
    req.config = config
    req.mysqldb = mysqldb

    next()
})

app.use('/api',bodyParser.json(), ApiRouter)

app.listen(port, () => {
    console.log(`Web listening on port http://localhost:${port}/`)
})