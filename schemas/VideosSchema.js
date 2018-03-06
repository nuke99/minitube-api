const Sequelize = require('sequelize');
const db        = require('../config/Database');

const STRING = Sequelize.STRING
const INT = Sequelize.INT

const VideoSchema = db.define('videos',{
    'id' : {
        type:Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    'video_key' :STRING,
    'title' : STRING,
    'description' : STRING,
    'user_pref_thumbnail_on_suggestion' : INT,
    'user_perf_thumbnail_on_search' : INT,
    'thumbnail_url' : STRING,
    'video_file_name' :STRING,
    'user_id' : INT,
    'processing_status' : STRING,
    'status' : STRING   
})