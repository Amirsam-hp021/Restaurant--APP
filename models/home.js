// models/home.js

const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
