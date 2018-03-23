const express=require('express')
const router=express.Router();
var passport = require("passport");

const {getRoot,getMovies,getTeam,getTv,getAddmovies,registerform,signUp,login,loginpost}=require('../helperFunctions/helperFunction')
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

router.route('/login').get(login);

router.post("/login",passport.authenticate("local",
	{
	successRedirect: "/",
	failureRedirect: "/login"
	}),function(req,res){
});

module.exports=router;