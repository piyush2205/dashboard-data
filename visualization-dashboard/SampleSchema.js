const mongoose = require('mongoose');

// Dynamic schema (no strict schema)
const DataSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('sampledatas', DataSchema);
