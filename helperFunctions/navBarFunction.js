const {getFull,getTrendingGenre}=require('imdb-scrapper')
const {searchEngine,searchImage}=require('./searchEngine/searchEngine')
const request=require('request-promise-native');
const search=require('./search')
const movie=require('../models/movieModel')
const arr=require('../conf/movies')
//callback for get function of '/'
const getRoot=function (req, res) {
    res.render('index.ejs')
}
const getMovies=function (req, res) {

            getFull(req.params.id).then((data)=>{res.render('movies.ejs',{movie:data});
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
    const genre=['action','comedy','fiction','romantic','thriller']
    let movies=genre.map((one)=>{
        return getTrendingGenre(one,8)
    })
    Promise.all(movies).then((value)=>{
        res.render('browse.ejs',{movies:value});
    })

};

module.exports={getRoot,getMovies,getTeam,getAddmovies,getAbout,getBrowse}
