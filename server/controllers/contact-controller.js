// controllers/contact-controller.js
const Contact = require('../models/contact-model'); // Ensure this path is correct

const saveContactMessage = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({
      username,
      email,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Message delivered successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { saveContactMessage };

