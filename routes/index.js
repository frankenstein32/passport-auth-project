// Initializing Express Object
const express = require('express');

// Initializing Router Object
const router = express.Router();

// Welcome html page
router.get('/', (req, res) => {
    res.render("Welcome");
});

// Export router to use in app.js
module.exports = router;