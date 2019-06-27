var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');  
var app = express();
var config = require('./config');
var routes = require('./api/route/route');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Setting up route
routes(app);

app.listen(config.port);

console.log('Irin RESTful API server started on: ' + config.port);
