// multiCloudRoutes.js
const express = require('express');
const router = express.Router();
const { getMultiCloudData } = require('../controllers/multiCloudController');

router.get('/data', getMultiCloudData);

module.exports = router;
 
