
const {searchEngine}=require('./searchEngine/searchEngine')
const request=require('request');
const arr=require('../conf/movies')

//callback for get function of '/'
const getRoot=function (req, res) {
    request('http://www.omdbapi.com/?s=tt3896198&apikey=1799f783',function (err,data) {
        res.render('index.ejs',{adress:"home"});
    })
}
const getMovies=function (req, res) {
    res.render('movies.ejs',{adress:"movies"})

}
const getTeam=function (req, res) {
    res.render('team.ejs',{adress:"team"})
}
const getTv=function (req, res) {
    res.render('tv.ejs', {adress: "tv"})
}
const getAddmovies=function (req, res) {
    searchEngine(arr,req,res)
}
module.exports={getRoot,getMovies,getTeam,getTv,getAddmovies}