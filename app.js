const express=require('express');
const app=express();
const mongoose=require('mongoose');
const passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    User           = require("./models/user"),
    bodyParser     =require('body-parser');
const passportconf=require('./conf/passportConf');
app.use(bodyParser.urlencoded({extended: true}));
passportconf(passport,app,LocalStrategy,User);
//required file
const navbarRoutes=require('./routes/navbarRoutes');
const authRoutes=require('./routes/authRoutes');



mongoose.connect('mongodb://localhost/test12');
app.use(express.static(__dirname+'/public'));


//Routes
app.use(navbarRoutes);
app.use(authRoutes);


//listening or creating server
app.listen(3000,function () {
    console.log('Done')
})
