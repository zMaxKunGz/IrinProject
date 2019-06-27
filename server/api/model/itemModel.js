'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
        name : String, //all
        pic : String, //all
        type : {type : String, enum : ['Human', 'Animal', 'Stuff']}, //all
        birthDate : Date, //human animal
        bloodType : {type : String, enum : ['A', 'B', 'AB', 'O']}, //human
        medicine : String, //human
        chronicDiseases : String, //human
        surgeryHis : String, // human
        sex : {type : String, enum : ['male', 'female']}, //human ,animal
        pedigree : String, //animal
        animalMedicalHis : String, //animal
        createDate : Date,
        updateDate : {type : Date, default: Date.now},
        comment : String,
        location : Object,
        isLost : {type : Boolean, default : false},
        describe : String,
        isUpdate : {type : Boolean, default : false}
    }
);

ItemSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isNew) return next();
    else {
        user.createDate = Date();
    }
    return next();
});

module.exports = mongoose.model('Item', ItemSchema);
