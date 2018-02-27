const Sequelize = require('sequelize');
const db        = require('../config/Database');
const GuestTokenSchema = require('./GuestTokenSchema');



const UserSchema = db.define('users',{
    'id' : {
        type:Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    'name' : Sequelize.STRING,
    'email' : Sequelize.STRING,
    'password' : Sequelize.STRING,
    'guest_token_id' : Sequelize.INTEGER,
    'status' : Sequelize.STRING
});

// UserSchema.hasOne(GuestTokenSchema);

module.exports = UserSchema;