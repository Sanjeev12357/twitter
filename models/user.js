const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
  
},{timeStamps:true});

const User=mongoose.model('User',userSchema);
module.exports=User;