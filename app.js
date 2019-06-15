// This will contain full express logic and use
var express = require('express')
var app = express();
var healthCheckRouter = require('./routes/healthcheck')
var notFoundHandler = require('./req-handlers/not-found-handler');
var globalhandler  = require('./req-handlers/global-error-handler');
var menuRoutes = require('./routes/menu-routes')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/",healthCheckRouter);
app.use("/menu",menuRoutes);
app.use("*",notFoundHandler);
app.use(globalhandler)
module.exports = app;