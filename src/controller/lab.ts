import { CustomDbRequest } from "../lib/interface";
import express from 'express'

const ctrl: {[key: string]: any} = {};

ctrl.scsApi = async(req:CustomDbRequest, res:express.Response) => {

  let result = await req.mysqldb('staff').where({id: 1})

  console.log(result,':result')

}

ctrl.waterBill = async (req:express.Request, res:express.Response) => {
    try {
      
      const calculate = async (params:number): Promise<number> => {
        let vat:number = 50
        let pricePerUnit:Array<number> = [5, 10, 30, 50] 
        let arr1: Array<number> = []
        let arr2: Array<number> = []
        let arr3: Array<number> = []
        let result: number = 0

        arr1 = Array(params).fill(1)

        for(let i = 0 ; i< arr1.length; i+= 10){
            let data = arr1.slice(i,i+10)
            arr2.push(data.length)
        }

        for (const key in arr2) {
            if (pricePerUnit[key] === undefined) {
                arr3.push(arr2[key] * pricePerUnit[3])
            }else{
                arr3.push(arr2[key] * pricePerUnit[key])
            }
        }

        const sum = arr3.reduce((cur, value)=>{
            return cur+value
        },0)

        result = sum + vat
        return result
      }

      let result:number = await calculate(req.body.number)
      let str:string = `ค่าน้ำ ${req.body.number} หน่วย ต้องจ่ายทั้งหมด ${result} บาท`
    
      res.json({
        status: true,
        data:str
      })
 
    } catch (error) {
      console.log('error: ',error)
        res.send({
          status: false,
          error: error
      })
    }
}

export default ctrl