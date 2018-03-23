const movie=require('../models/movieModel')
const User = require('../models/user')
var passport = require("passport");
const {searchEngine}=require('./searchEngine/searchEngine')
const arr=require('../conf/movies')
//callback for get function of '/'
const getRoot=function (req, res) {
    res.render('index.ejs',{adress:"home"})
}
const getMovies=function (req, res) {
    movie.find({Type:'movie'}).then((movies)=>{
        res.render('movies.ejs',{adress:"movies",movies})
    })
}
const getTeam=function (req, res) {
    res.render('team.ejs',{adress:"team"})
}
const getTv=function (req, res) {
    res.render('tv.ejs', {adress: "tv"})
}
const getAddmovies=function (req, res) {
    searchEngine(arr)
}
const registerform=function (req, res) {
    res.render('register.ejs');
}

const signUp=function(req,res){
    var newUser = new User({username: req.body.username});
    console.log(req.body.password);
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render('register.ejs');
        } 
        passport.authenticate("local")(req,res,function(){
            alert("user created");
        });
    });

}

module.exports={getRoot,getMovies,getTeam,getTv,getAddmovies,registerform,signUp}