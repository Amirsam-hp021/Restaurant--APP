// controllers/contactController.js
const Contact = require("../models/contact");

exports.getContactPage = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Contact Page",
  });
};

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();
    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit the message",
    });
  }
};
