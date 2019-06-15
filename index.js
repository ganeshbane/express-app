// this fil e will take care of local server up and down 
require('dotenv').config();
var app = require('./app');
const port = process.env.PORT;
app.listen(port,(err)=>{
    if(err){
        console.error("Unable to start on port "+port,err)
    }
    else{
        console.log("Server Started on Port "+port);
    }
})