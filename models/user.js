const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var userSchema = new Schema({
    username: String,
    password: String,
    gender: String,
    role: String
  });

  var user = mongoose.model('user', userSchema);

  module.exports = {user};