function notFound(req,res,next){
    var result= {
        status:404,
        message:"Resource not available"
    }
    next(result)
}
module.exports  = notFound;