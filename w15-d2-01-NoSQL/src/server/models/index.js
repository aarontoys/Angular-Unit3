var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/art-db');

module.exports.Artists = require('./artist');

