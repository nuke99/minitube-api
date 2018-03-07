const Sequelize = require('sequelize');
const db        = require('../config/Database');


const ErrorSchema = db.define('error_logs',{
    'id' : {
        type:Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    'type' : Sequelize.STRING,
    'log' : Sequelize.STRING
});




module.exports = ErrorSchema;