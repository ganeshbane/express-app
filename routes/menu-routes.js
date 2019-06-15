var express = require('express');
var router = express.Router();
var menuHandler = require('../req-handlers/menu-req-handler')
router.route("/").get(menuHandler.getAllMenu).post(menuHandler.createMenu).all((req,res)=>{
    res.status(501).json({message:"Not Implemented "})
})

module.exports = router;