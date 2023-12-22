import express from "express";
import { CustomDbRequest } from "../lib/interface";
import AuthService from '../service/auth.service'

const ctrl: {[key: string]: any} = {};

let old_token = 555555555555

ctrl.singIn = async (req:CustomDbRequest,res:express.Response) => {
    try {
        return true


        
        // let result = await AuthService.onSingIn(req.mysqldb,req.body)ssdfsfsfs
        // let userstest = {
        //     username: 'admin@compay.com',
        //     password: 'dev1234',
        //     permission: 'admin'
        // }

        // let reqUser = req.body

        // if(userstest.username !== reqUser.username && userstest.password !== reqUser.password) throw new Error("User invalid")
        // else res.json({status: true})
        
    } catch (error) {
        console.log('error: ',error)
        res.json({
            status: false,
            error: error
        })
    }
}

export default ctrl