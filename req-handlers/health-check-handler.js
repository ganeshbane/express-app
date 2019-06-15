var healthCheckService = require('../service/health-check-service');
function healthCheckHandler(req,res,next){
    healthCheckService.healthCheckService((err,data)=>{
        if(err){
            //res.status(err.status).json({err});
            next(err);
        }
        else{
            res.status(200).json({data});
        }
    })
}
module.exports = healthCheckHandler