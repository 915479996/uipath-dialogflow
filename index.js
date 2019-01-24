'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
server       = express(),
port         = 8080
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./Routes'); //importing route
routes(server); //register the route
server.listen(port, function () {
    console.log("Server is up and listening on port" + port);
});


