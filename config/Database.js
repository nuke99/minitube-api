const Sequelize = require('sequelize');
require('dotenv').config()

const creds = {
    db : process.env.DATABASE,
    name: process.env.USERNAME,
    password : process.env.PASSWORD
}


const seq = new Sequelize(creds.db, creds.name, creds.password, {
    host : process.env.HOST,
    dialect: 'mysql',
    define : {
        timestamps : false, 
        freezeTableName : true
    }
});


seq.authenticate().then(() => {
    console.log('[+] database connected');
}).catch(error => {
    console.error('[!] Error connecting ',error)
})

module.exports = seq;