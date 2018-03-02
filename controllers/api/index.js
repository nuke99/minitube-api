const express = require('express');
const router = express.Router();



// API Routes 
router.use('/users',require('./Users'));
router.use('/files',require('./Files'))



module.exports = router;