const express=require('express')
const router=express.Router()

const {getRoot,getMovies,getBrowse,getTeam,getAbout,getAddmovies}=require('../helperFunctions/navBarFunction')
//root page
router.route('/').get(getRoot)
//movies page
router.route('/movies/:id').get(getMovies)
//team page
router.route('/team').get(getTeam)
//about page
router.route('/about').get(getAbout)
router.route('/browse').get(getBrowse)
router.route('/admin/addmovies').get(getAddmovies)
router.route('/admin/addPhoto').get()


module.exports=router;