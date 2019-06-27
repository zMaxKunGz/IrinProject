'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  name : String,
  password : String,
  phone : String,
  email : String,
  item : Array,
  pic : String,
  lineId : String,
  address : String,
  createDate : Date,
  updateDate : {type : Date, default: Date.now},
  showPhone : {type : Boolean, default : false},
  showAddress : {type : Boolean, default : false}
  }
);

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});


UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isNew) return next();
    else {
      user.createDate = Date();
    }
    return next();
});



module.exports = mongoose.model('User', UserSchema);
