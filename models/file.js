const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var fileSchema = new Schema({
    file_uri: String,
    name: String
});

var file = mongoose.model('file', fileSchema);

module.exports = { file };