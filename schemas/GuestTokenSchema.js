const Sequelize = require('sequelize');
const db        = require('../config/Database');


const UserSchema = db.define('guest_tokens',{
    'id' : {
        type:Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    'token' : Sequelize.STRING,
    'created_timestamp' : Sequelize.TIME
});




module.exports = UserSchema;