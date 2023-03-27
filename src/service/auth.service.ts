
const service: {[key: string]: any} = {};

service.onSingIn = async (_db:any,param:any) => {
    try {

        return await _db('userss').then((row:any) => JSON.parse(JSON.stringify(row)))
        
    } catch (error) {
        return error
    }
}

export default service