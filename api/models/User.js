const mongoose= require('mongoose');

const usersSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        max:32,
        min:5,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:32,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},
{timestamps:true}
);

module.exports= mongoose.model('User', usersSchema);
