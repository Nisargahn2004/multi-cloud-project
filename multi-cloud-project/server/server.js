// server.js
const express = require('express');
const mongoose = require('mongoose');
const multiCloudRoutes = require('./routes/multiCloudRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/multicloud', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', multiCloudRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 
