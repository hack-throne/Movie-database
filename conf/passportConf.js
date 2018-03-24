function passportconf(passport,app,LocalStrategy,User) {
    app.use(require("express-session")({
        secret: "The Movie Database",
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    app.use(function(req, res, next){
        res.locals.currentUser = req.user;
        next();
    });

}
module.exports=passportconf