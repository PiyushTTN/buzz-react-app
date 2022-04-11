const mongoose = require('mongoose');



const commentSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"profile"
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'posts'
    },
    desc:{
        type:String,
        default:"",
    }
},
{timestamps:true}
);

module.exports = mongoose.model('Comments',commentSchema);