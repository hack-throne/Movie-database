const express=require('express');
const app=express();
const mongoose=require('mongoose');

var passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    User           = require("./models/user"),
    bodyParser     = require("body-parser");


//required file
const navbarRoutes=require('./routes/navbarRoutes')




mongoose.connect('mongodb://localhost/test15');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname+'/public'))

//Routes
app.use(navbarRoutes)

app.use(require("express-session")({
	secret: "The Movie Database",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

//listening or creating server
app.listen(3000,function () {
    console.log('Done')
})
