// controllers/homeController.js
const Home = require("../models/home");

exports.getHomePage = async (req, res) => {
  try {
    const homeContent = await Home.findOne(); // Assuming there's only one home page content
    if (!homeContent) {
      return res.status(404).json({
        success: false,
        message: "Home page content not found",
      });
    }
    res.json({
      success: true,
      data: homeContent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
