const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema= new Schema
( {
        username: { type:String, default:"-" },
        fullname: { type:String ,default:"-"},     
        speciality:  {type:String,defalut:"-"},
        password: {type:String,default:"-"},
        work:{type:Number},
        approve: {type:String,default:"NO"},
        field:{type:String}
    }
);
const User=mongoose.model('User',userSchema);

module.exports=User;
