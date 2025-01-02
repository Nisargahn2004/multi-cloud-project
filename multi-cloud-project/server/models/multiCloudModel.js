// multiCloudModel.js
const mongoose = require('mongoose');

const multiCloudSchema = new mongoose.Schema({
    name: String,
    data: String,
});

const MultiCloud = mongoose.model('MultiCloud', multiCloudSchema);

module.exports = MultiCloud;
 
