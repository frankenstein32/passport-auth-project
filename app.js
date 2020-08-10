// Initializing Express Object
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

require('./config/passport')(passport);

// Initializing path module Object
const path = require('path');
const { ppid } = require('process');

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

//Body Parser
app.use(express.urlencoded({extended: false}));

// Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

//Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


// Initializing PORT with default 5000
const PORT = process.env.PORT || 5000;

// Welcome Page Route
app.use('/', require(path.join(__dirname, '/routes/index.js')));

//Users Page Route
app.use('/users', require(path.join(__dirname, '/routes/users.js')));

// Starting Server at PORT default - 5000
app.listen(PORT, console.log(`http://localhost:${PORT}`));
