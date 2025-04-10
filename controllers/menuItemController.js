// controllers/menuItemController.js
const MenuItem = require("../models/MenuItem");

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json({ success: true, data: menuItems });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { name, price, image } = req.body; // include image
    const newItem = new MenuItem({ name, price, image });
    await newItem.save();
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
