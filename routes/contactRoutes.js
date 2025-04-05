// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Get the Contact page
router.get("/", contactController.getContactPage);

// Handle the Contact Form Submission
router.post("/submit", contactController.submitContactForm);

module.exports = router;
