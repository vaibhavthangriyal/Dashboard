const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Product = mongoose.model('products', ProductSchema);
