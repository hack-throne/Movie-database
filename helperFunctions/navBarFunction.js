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
}
const getTeam=function (req, res) {
    res.render('team.ejs')
}
const getAddmovies=function (req, res) {
    searchEngine(arr)
}
const getAbout=function (req, res){
    res.render('about.ejs')
}
const getBrowse=function (req, res) {
    res.render('browse.ejs')
}
module.exports={getRoot,getMovies,getTeam,getAddmovies,getAbout,getBrowse}
