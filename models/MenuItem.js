const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  // Fix: Changed to lowercase 'menuItemSchema'
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
