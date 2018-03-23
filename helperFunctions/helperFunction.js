const movie=require('../models/movieModel')
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
module.exports={getRoot,getMovies,getTeam,getTv,getAddmovies}