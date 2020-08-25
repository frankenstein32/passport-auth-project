// Initializing Express Object
const express = require('express');
const path = require('path')

// Initializing Router Object
const router = express.Router();

//Auth Object
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome html page
router.get('/', forwardAuthenticated, (req, res) => {
    console.log(__dirname);
    res.render("Welcome.ejs");
});

// Dashboard html page
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard.ejs', {
    name: req.user.name
  })
);

// Export router to use in app.js
module.exports = router;