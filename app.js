// Initializing Express Object
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


// Initializing path module Object
const path = require('path');

// Initializing express Object
const app = express();

//DB config
const db = require('./config/keys').MongoURI;

//connect Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

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
