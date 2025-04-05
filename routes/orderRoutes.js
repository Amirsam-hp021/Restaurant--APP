const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Create new order
router.post("/", orderController.createOrder);

// Get all orders
router.get("/", orderController.getAllOrders);

module.exports = router;
