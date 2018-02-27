const express = require('express');
const router = express.Router();

const API = require('../controllers/api');
// const Uploads = require('../controllers/api/Upload');


router.use('/api/',API);

module.exports = router;