'use strict';
var express = require('express');
module.exports = function(app) {
  var Controller = require('./Controller');
var apiRoutes =  express.Router();
app.get('/',function(req,res){
    res.send('Hi!Welcome.');
  });
// registerUser Route
  app.route('/').post(Controller.processRequest);
};