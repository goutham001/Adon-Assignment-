const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  var categorySchema = new Schema({
      cat_id: Number,
      cat_name: String
  });

  var category = mongoose.model('category', categorySchema);
  module.exports = {category};