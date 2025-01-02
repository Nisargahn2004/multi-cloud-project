<<<<<<< HEAD
// multiCloudModel.js
const mongoose = require('mongoose');

const multiCloudSchema = new mongoose.Schema({
    name: String,
    data: String,
});

const MultiCloud = mongoose.model('MultiCloud', multiCloudSchema);

module.exports = MultiCloud;
 
=======
// multiCloudModel.js
const mongoose = require('mongoose');

const multiCloudSchema = new mongoose.Schema({
    name: String,
    data: String,
});

const MultiCloud = mongoose.model('MultiCloud', multiCloudSchema);

module.exports = MultiCloud;
 
>>>>>>> ee6868809825ff5f6ec4db9a605d26209a68dd0b
