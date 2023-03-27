
const service: {[key: string]: any} = {};

service.onSingIn = async (_db:any,param:any) => {
    try {
        if(param.number === 23)
            return await _db('users').then((row:any) => JSON.parse(JSON.stringify(row)))
        else
            return 'STUPID'
        
    } catch (error) {
        return error
    }
}

export default service