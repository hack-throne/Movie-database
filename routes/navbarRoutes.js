const express=require('express')
const router=express.Router()

const {getRoot,getMovies,getTeam,getTv,getAddmovies}=require('../helperFunctions/navBarFunction')
//root page
router.route('/').get(getRoot)
//movies page
router.route('/movies/:title').get(getMovies)
//team page
router.route('/team').get(getTeam)
//tv page
router.route('/tv').get(getTv)
//
router.route('/admin/addmovies').get(getAddmovies)


module.exports=router;