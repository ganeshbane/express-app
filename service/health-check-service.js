const healthCheckDao = require('../dao/health-check-dao');

function healthCheckService(callback) {
    healthCheckDao((err, data) => {
        if (err) {
            var errResult = {
                status: 500,
                message: "Connection unsucessful",
                err
            }
            callback(errResult)
        }
        else {
            var result = {
                status: 200,
                message: "Successful Connection",
                data
            }
            callback(null, result);
        }
    })
}
module.exports = {
    healthCheckService
}