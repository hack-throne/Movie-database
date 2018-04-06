const express=require('express');
const router=express.Router();

const {registerform,signUp,login,loginpost,logout}=require('../helperFunctions/authFunctions')
empty=function (req, res) {}
router.route('/register').get(registerform).post(signUp);

router.route('/login').get(login).post(loginpost(),empty);
router.route("/logout").get(logout)
module.exports=router;