const mongoose = require('mongoose');
const Schema=mongoose.Schema;

var uploadschema= new mongoose.Schema
( {
        imagename:{ type:String, default:"/" },
        description: {type:String,default:"NOT AVAILABLE.."},
        name: {type:String,dafault:"-"},
        speciality:{type:String},
        exp:{type:Number},
        upload:{type:String},
        date:{type:Date},
        hours:{type:Number},
        minutes:{type:Number},
        seconds:{type:Number}
    }
);

var aur_anaesthesia=mongoose.model('aur_anaesthesia',uploadschema);

module.exports=aur_anaesthesia;
