import express from "express";
import { CustomDbRequest } from "../lib/interface";
import AuthService from '../service/auth.service'

const ctrl: {[key: string]: any} = {};

ctrl.singIn = async (req:CustomDbRequest,res:express.Response) => {
    try {
        const {mysqldb} = req
        let result = await AuthService.onSingIn(mysqldb,req.body)

        res.json(result)
        
    } catch (error) {
        console.log('error: ',error)
        res.json({
            status: false,
            error: error
        })
    }
}

export default ctrl