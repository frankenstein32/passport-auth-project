// Initializing Express Object
const express = require('express');
const expressLayouts = require('express-ejs-layouts');


// Initializing path module Object
const path = require('path');

// Initializing express Object
const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Initializing PORT with default 5000
const PORT = process.env.PORT || 5000;

// Welcome Page Route
app.use('/', require(path.join(__dirname, '/routes/index.js')));

//Users Page Route
app.use('/users', require(path.join(__dirname, '/routes/users.js')));

// Starting Server at PORT default - 5000
app.listen(PORT, console.log(`http://localhost:${PORT}`));
