const express=require('express')
const router=express.Router()

const {getRoot,getMovies,getTeam,getTv,getAddmovies,registerform,signUp}=require('../helperFunctions/helperFunction')
//root page
router.route('/').get(getRoot)
//movies page
router.route('/movies').get(getMovies)
//team page
router.route('/team').get(getTeam)
//tv page
router.route('/tv').get(getTv)
//
router.route('/admin/addmovies').get(getAddmovies)

router.route('/register').get(registerform)

router.route('/register').post(signUp);
module.exports=router;