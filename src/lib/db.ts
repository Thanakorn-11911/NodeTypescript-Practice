import knex, { Knex } from "knex";

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
    }, 10_000)

    return dbconnect
}
  
const createUserTables = async (knex: Knex): Promise<void> =>{
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

const dropUserTables = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTable('users');
}


export default {
    db,
    createUserTables,
    dropUserTables
};