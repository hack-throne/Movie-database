const mongoose=require('mongoose')
const schema={
    title:{type:String},
    year:String,
    runtime:String,
    genre:[String],
    director:String,
    story:String,
    awards:Array,
    poster:String,
    ratings:String,
    imdbId:String,
    cast:Array,
}
const movie=new mongoose.Schema(
 schema,{timestamp:true}
)
module.exports=mongoose.model('movie',movie)
