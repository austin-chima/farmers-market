const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgURL: { type: String, required: true },
  originalprice: { type: Number, required: true },
  sellingprice: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;