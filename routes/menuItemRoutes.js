const express = require("express");
const router = express.Router();
const menuItemController = require("../controllers/menuItemController");

// GET All Menu Items
router.get("/", menuItemController.getAllMenuItems);

// POST New Menu Item
router.post("/", menuItemController.createMenuItem);

module.exports = router;
