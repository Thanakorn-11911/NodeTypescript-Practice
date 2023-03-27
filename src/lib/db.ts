import knex from "knex";

const db = (config:any): any => {

    let dbconnect = knex(config)

    setInterval(async ()=>{
        try {
            await dbconnect.raw('select now()')
            if(true){
                console.log('Connected to MySQL database success!')
            }
        } catch (error) {
            console.log('error: ',error)
        }
    }, 60_000)

    return dbconnect
}
  
  export default db;