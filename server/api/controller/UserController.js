var dataBase = require('./DatabaseConnection');
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const DB = dataBase.getDB();


// username, password, name, level, token
exports.addUsers = function(req, res) {
    const query = req.body;
    var username = query.username;
    var password = query.password;
    var name = query.name;
    var level = query.level;
    var hashPassword = "";
    bcrypt.hash(password, SALT_WORK_FACTOR, function(err, hash) {
        if (err) {
            throw err;
        }
        else {
            hashPassword = hash;
            var dbQuery = "Insert into User(username, password, name, level) values ?";
            var values = [[username, hashPassword, name, level]];
            DB.query(dbQuery, [values], function(err, result, field){
                if(err) {
                    res.status(400).json({'status' : 'already username'});
                }
                else {
                    res.json({'status' : 'success'});
                }
            });
        }
    });
}

exports.getUser = function(req, res) {
    res.send(req.userObj.name);
}




