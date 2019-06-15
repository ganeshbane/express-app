
function allErrorhandler(err,req,res,next){
    var result = {
        status: err.status || 500,
        message:err.message || "Something went Wrong ",
        err:err
    }
    res.status(result.status).json(result);
}

module.exports = allErrorhandler