const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    min: [0, 'Price cannot be negative']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide image URL']
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
    trim: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);