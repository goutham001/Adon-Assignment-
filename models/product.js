const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  var productSchema = new Schema({
      product_id: Number,
      title: String,
      description: String,
      images: Array,
      brochure: String,
      category: String
  });
  var product = mongoose.model('product', productSchema);

  module.exports = {product}