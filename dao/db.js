var mongoose = require('mongoose');
function openDBConnection(){

    return new Promise((resolve,reject)=>{

        mongoose.connect(process.env.DBURL, (err) => {

            if (err) {

                reject(err);

            }

            else {

                resolve();

            }

        });

    })

}



function closeDBConnection(){

    return new Promise(function(resolve,reject){

        mongoose.connection.close((err)=>{
            if(err){
                reject(err)
            }
            resolve("Connection Closed Successfully");

        })

    });

}

module.exports = {

    openDBConnection,closeDBConnection

}