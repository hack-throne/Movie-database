

const request=require('request');


//callback for get function of '/'
getRoot=function (req, res) {
    request('http://www.omdbapi.com/?i=tt3896198&apikey=1799f783',function (err,data) {
        res.render('index.ejs',{adress:"home"});
    })
}
getMovies=function (req, res) {
    res.render('movies.ejs',{adress:"movies"})
}
getTeam=function (req, res) {
    res.render('team.ejs',{adress:"team"})
}
getTv=function (req, res) {
    res.render('tv.ejs',{adress:"tv"})
}
module.exports={getRoot,getMovies,getTeam,getTv}