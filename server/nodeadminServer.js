var express = require('express');
var app = express();
var nodeAdmin = require('nodeadmin');
var port = process.env.PORT || 12500;
var DB = require('./api/controller/DatabaseConnection');

app.use(nodeAdmin(app));

app.listen(port);