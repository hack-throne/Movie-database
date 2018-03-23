const mongoose=require('mongoose')
const schema={
    Title:{type:String},
    Year:String,
    Rated:String,
    Released:String,
    Runtime:String,
    Genre:String,
    Director:String,
    Writer:String,
    Actors:String,
    Plot:String,
    Language:String,
    Country:String,
    Awards:String,
    Poster:String,
    Ratings:[{Source:String,Value:String}],
    Value:String,
    Metascore:String,
    imdbRating:String,
    imdbVotes:String,
    imdbID:String,
    Type:String,
    DVD:String,
    BoxOffice:String,
    Production:String,
    Website:String,
}
const movie=new mongoose.Schema(
 schema,{timestamp:true}
)
module.exports=mongoose.model('movie',movie)
