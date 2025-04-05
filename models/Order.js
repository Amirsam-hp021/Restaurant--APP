const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    deliveryMethod: {
      type: String,
      enum: ["pickup", "delivery"],
      default: "pickup",
    },
    note: { type: String },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
