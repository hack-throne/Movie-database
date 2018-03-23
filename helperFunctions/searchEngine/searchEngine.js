const request=require('request-promise-native')
const mongoose=require('mongoose');
const movie=require('../../models/movieModel')
 const searchEngine=function (movies,req,res) {
    var tasks=movies.map((name,i)=>{
        return request.get(`http://www.omdbapi.com/?s=${name}&apikey=1799f783`)
    })
     var arr=[]
    var result=Promise.all(tasks);
    result.then(function(data){
        return data.map((movie,i)=>{

            return JSON.parse(movie)
        })
    }).then((data)=>{
       return data.map((single)=>{
            return single.Search;
    })

    }).then((data)=>{
        return [].concat(...data)
 }).then((data)=>{
     return data.map((single)=>{
       try{
          // console.log(single.imdbID)
           return single.imdbID

       }
       catch(E){

       }

     })
     }).then((data)=>{
         return data.map((single)=>{
             console.log(single)
             return request.get(`http://www.omdbapi.com/?i=${single}&apikey=1799f783`)
         })
     }).then((data)=>{
         Promise.all(data).then((single)=>{
            const db= single.map((second)=>{
                return movie.create(JSON.parse(second))
     })
     console.log(db);
     })
     })
}
module.exports={searchEngine}
