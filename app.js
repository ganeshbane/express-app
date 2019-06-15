// This will contain full express logic and use
var express = require('express')
var app = express();
var healthCheckRouter = require('./routes/healthcheck')
var notFoundHandler = require('./req-handlers/not-found-handler');
var globalhandler  = require('./req-handlers/global-error-handler');
app.use("/",healthCheckRouter);
app.use("*",notFoundHandler);
app.use(globalhandler)
module.exports = app;