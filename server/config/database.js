const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
process.env.PORT = process.env.PORT || 27017;

const uri = process.env.MONGODB_URL || `mongodb://localhost:${process.env.PORT}/locadora`;

const connect = () => mongoose.connect(uri);

module.exports = { connect };