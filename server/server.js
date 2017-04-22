// Packages
var fs      = require('fs');
var express = require('express');
var path    = require('path');

//Imports
var indexRoutes = require('./routes/index');

// Create App
var app = express();

//View Engine
app.set('view engine', 'html');
app.engine('html', function(path, options, callbacks) {
    fs.readFile(path, 'utf-8', callback);
});

// Middleware
app.use(express.static(path.join(__dirname, '../client')));

//Routes
app.use('/', indexRoutes);

//Error Handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
});

module.exports = app;
