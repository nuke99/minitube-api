const express = require('express');
const router = express.Router();



// API Routes 
router.use('/users',require('./Users'));



module.exports = router;