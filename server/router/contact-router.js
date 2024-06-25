const express = require('express');
const { saveContactMessage } = require('../controllers/contact-controller'); // Correct path to contact-controller

const router = express.Router();

router.post('/contact', saveContactMessage); // Correctly use the post method

module.exports = router;