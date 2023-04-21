import express, {Application, Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'

import DB from './lib/db'
import config from './config'
import {CustomDbRequest} from './lib/interface'
import ApiRouter from './api/index'


const app: Application = express()
const port = config.server.port

const mysqldb = DB.db(config.mysqldb)

app.use ((req:CustomDbRequest, res:Response, next: NextFunction) => {
    req.config = config
    req.mysqldb = mysqldb

    next()
})

// app.use('/',async (req:CustomDbRequest, res:Response)=>{
//    await DB.createUserTables(req.mysqldb)
//    .then(() => console.log('Table created successfully'))
//    .catch(error => console.error(error))
    // await req.mysqldb('users')
    // .insert({name: 'admin', email:'kuy@gmail.com', password:'dev1234', created_at: req.mysqldb.fn.now(), updated_at: req.mysqldb.fn.now()})
    // .then(()=>console.log('insert successfully'))
// })


app.use('/api',bodyParser.json(), ApiRouter)

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/`)
})