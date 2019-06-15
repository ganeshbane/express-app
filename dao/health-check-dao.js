var mongoose = require('mongoose')

function healthCheck (callback){
    // Environment variables and usage in code 
    mongoose.connect(process.env.DBURL,(err)=>{
        mongoose.connection.close()
        if(err){
            console.log("Error while connecting ",err)
            callback( err);
        }
        else{
            callback( null, new Date());
        }
    })
    
}
module.exports = healthCheck