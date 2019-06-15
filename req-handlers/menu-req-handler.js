var service = require('../service/menu-service')
var getAllMenu = (req, res, next) => {
    service.getAllMenus((err, data) => {
        if (err) {
            console.log("Error While Reading Menu ", err);
            next(err);
        }
        else {
            res.status(200).json(data);
        }
    })
}
var createMenu = (req, res, next) => {
    var data = {
        name: req.body.name,
        price: req.body.price
    }
    console.log("request is ", data);
    service.createMenu(data, (err, data) => {
        if (err) {
            next(err);
        }
        else {
            res.status(200).json({ data })
        }
    })
}
module.exports = {
    getAllMenu , createMenu
}