const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ["salad", "appetizer", "burger", "pizza", "sandwich"], // fixed typo: "apptizer" -> "appetizer"
    required: true,
  },
  image: { type: String, required: true }, // put image here, and made it required
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
