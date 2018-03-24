const movie=require('../models/movieModel')
const {searchEngine}=require('./searchEngine/searchEngine')
const search=require('./search')
const arr=require('../conf/movies')
//callback for get function of '/'
const getRoot=function (req, res) {
    res.render('index.ejs')
}
const getMovies=function (req, res) {
    movie.find({Title:search(req.params.title)}).then((movies)=>{
        res.render('movies.ejs',{movie:movies[0]})
    })
    //
}
const getTeam=function (req, res) {
    res.render('team.ejs')
}
const getTv=function (req, res) {
    res.render('tv.ejs')
}
const getAddmovies=function (req, res) {
    searchEngine(arr)
}
module.exports={getRoot,getMovies,getTeam,getTv,getAddmovies}
