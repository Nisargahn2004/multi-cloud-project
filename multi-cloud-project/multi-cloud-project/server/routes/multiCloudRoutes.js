<<<<<<< HEAD
// multiCloudRoutes.js
const express = require('express');
const router = express.Router();
const { getMultiCloudData } = require('../controllers/multiCloudController');

router.get('/data', getMultiCloudData);

module.exports = router;
 
=======
// multiCloudRoutes.js
const express = require('express');
const router = express.Router();
const { getMultiCloudData } = require('../controllers/multiCloudController');

router.get('/data', getMultiCloudData);

module.exports = router;
 
>>>>>>> ee6868809825ff5f6ec4db9a605d26209a68dd0b
