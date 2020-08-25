// Initializing Express Object
const express = require('express');

// Initializing Router Object
const router = express.Router();

//Auth Object
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome html page
router.get('/', forwardAuthenticated, (req, res) => {
    res.render("../views/Welcome");
});

// Dashboard html page
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  })
);

// Export router to use in app.js
module.exports = router;