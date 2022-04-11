const mongoose = require('mongoose');


const userProfile = new mongoose.Schema({
    userName: {
        type:String,
        required:true,
    },
    profileImage:{
        type:String,
    },
    coverImage:{
        type:String
    },
    firstName:{
        type:String,
        required:true
    }, 
    lastName:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    myWebsite:{
        type:String
    }, 
    gender:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        default:Date.now
    },
    country:{
        type: String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zip :{
        type:Number,
        max:7,
        min:4
    }
},
{timestamps:true}
);

const UserProfile = mongoose.model('UserProfile', userProfile);
module.exports = UserProfile;