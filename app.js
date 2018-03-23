const express=require('express');
const app=express();
const request=require('request');
const bodyparser=require('body-parser');
const {searchEngine}=require('./helperFunctions/searchEngine/searchEngine')

//callback for fuctions;
const {getRoot,getMovies,getTeam,getTv,getAddmovies}=require('./helperFunctions/helperFunction')

app.use(express.static(__dirname+'/public'))
//root page
app.route('/').get(getRoot)
app.route('/movies').get(getMovies)
app.route('/team').get(getTeam)
app.route('/tv').get(getTv)
app.route('/admin/addmovies').get(getAddmovies)

//

app.listen(3000,function () {
    console.log('Done')
})
