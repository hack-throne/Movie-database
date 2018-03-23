var mongoose = require("mongoose");
var passLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: "Username cannot be empty"
    },
    password:String,
    created_date:{
        type: Date,
        default: Date.now
    },
    movie_playlist:{
        type: Object,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "movie"
        }

    }
});

userSchema.plugin(passLocalMongoose);


module.exports = mongoose.model("User",userSchema);