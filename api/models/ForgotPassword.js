const mongoose= require('mongoose');

const passwordSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    newPassword:{
        type: String,
        required: true,
    },
    confirmPassword:{
        type: String,
        required: true,
    }
});

module.exports= mongoose.model('ForgotPassword', passwordSchema);