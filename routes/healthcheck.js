var express = require('express');
var router = express.Router();
var healthCheckHandler = require('../req-handlers/health-check-handler')
router.route("/").get(healthCheckHandler).all((req,res)=>{
    res.status(501).json({message:"Not Implemented"})
})
module.exports = router;