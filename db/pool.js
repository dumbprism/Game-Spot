const {Pool} = require('pg')

const database_pool = new Pool({
    host: "localhost",
    user: "postgres",
    database : "inventory",
    password : "a19",
    port : 5432
});

module.exports = database_pool;