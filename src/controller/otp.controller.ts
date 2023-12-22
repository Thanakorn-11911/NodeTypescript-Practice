import express from "express";
import { CustomDbRequest } from "../lib/interface";
import AuthService from '../service/auth.service'

const ctrl: {[key: string]: any} = {};

ctrl.sendOtp = async (req:CustomDbRequest,res:express.Response) => {
    try {
        console.log('===============================')
        res.json({
            data: req.body.phoneno,
            status: true,
            
        })

        // if(phoneno && phoneno.toString().length === 10){

        //     var data = JSON.stringify({
        //         "msisdn": phoneno,
        //         "sender": "SMSOTP"
        //     });

        //     var config = {
        //         method: 'post',
        //         url: 'https://www.havesms.com/api/otp/send',
        //         headers: { 
        //             'Authorization': 'Bearer { YOUR TOKEN }', 
        //             'Content-Type': 'application/json'
        //         },
        //         data : data
        //     };

        // }else{
        //     res.status(400).json({
        //         resCode: 400,
        //         resMessage: 'bad : Invalid phone number',
        //         log:1
        //     })
        // }
        
    } catch (error) {
        console.log('error: ',error)
        res.status(400).json({
            resCode: 400,
            resMessage: 'bad',
            log:0
        })
    }
}

export default ctrl