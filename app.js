const express=require('express');
const app=express();
const mongoose=require('mongoose')


//required file
const navbarRoutes=require('./routes/navbarRoutes')




mongoose.connect('mongodb://localhost/test12');
app.use(express.static(__dirname+'/public'))

//Routes
app.use(navbarRoutes)

//listening or creating server
app.listen(3000,function () {
    console.log('Done')
})
