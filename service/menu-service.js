const menuDao = require('../dao/menu-dao');

function getDbConnection(callback) {
    //return new Promise((resolve, reject) => {
        mongoose.connect(process.env.PORT, (err) => {
            if (err) {
                //reject(err);
               callback(err);
            }
            else {
            //    resolve()
              callback();
            }
        })
    //});

}
function closeDBConnection() {
    db.closeDBConnection().then(data=>{
        console.log("closed Connection Successfully")

    }).catch(err=>{

        console.error("Unable to Close ",err)

    })

    // mongoose.connection.close((err => {

    //     if (err) {

    //         console.error("Unable to close Connection ", err)

    //     }

    //     else {

    //         console.log("Closed Connection Successfully ");

    //     }

    // }))
}
const menuService = (callback) => {

    menuDao.getAllMenus((err, data) => {
        if (err) {
            callback({
                status: 500,
                message: "Unable to get Menu ",
                err
            })
        }
        else {
            callback(null, {
                status: 200,
                data: data
            })
        }
    })
}
function createMenu(data, callback) {
    menuDao.createMenu(data, (err, data) => {
        if (err) {
            callback({
                status: 500,
                message: "Error while Creating data ",
                err
            })
        } else {
            callback(null, {
                status: 200,
                message: "Created Menu ",
                data
            })
        }
    })
}
module.exports = {
    getAllMenus: menuService,
    createMenu
}