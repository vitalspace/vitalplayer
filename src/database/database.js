'use strict'
/* Dependencies */
import low from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";
/* Controllers */
let db
const db_cotroller = {}
/* Methods */
db_cotroller.createConnection = async () => {
    const adapter = new FileAsync('db.json')
    db = await low(adapter)
    db.defaults({ list: [] }).write()
    console.log('Data Base is connected')
}    
db_cotroller.getConnection = () => db
/* Exports */

export {
    db_cotroller
}

// module.exports = db_cotroller