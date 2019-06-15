const menu = require('../models/menu');
const db = require('./db')
function getAllMenus(callback) {
    db.openDBConnection().then(()=>{
        menu.find({}, (err, data) => {
            closeDBConn();
            console.log("Error is ", err);
            console.log("Data is ", data);
            callback(err, data);
        })
        
    }).catch(err=>{
        callback(err);
    })
    
}
function createMenu(data, callback) {
    var single = {
        name: data.name,
        price: data.price
    }
    var singles = []
    singles.push(single)
    console.log("Menu Items ", singles)
    db.openDBConnection().then(()=>{
        menu.create(singles, (err, data1) => {
            closeDBConn();
            if (err) {
                console.log("Error While Inserting record", err)
                callback(err)
            }
            else {
                callback(null, data1);
            }
        })
    }).catch(err=>{
        console.log("Unable to get Connection ",err)
        callback(err);
    })  
    
}
function closeDBConn(){
    db.closeDBConnection().then().catch(err=>{
        console.log("Error While closing ")
    })
}
module.exports = {
    getAllMenus , createMenu
}