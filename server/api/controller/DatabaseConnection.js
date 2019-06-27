exports.getDB = function() {
    var mysql = require('mysql');

    const myCon = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'pasitTiwa_1996',
        database : 'irin'
    });
    return myCon;
}