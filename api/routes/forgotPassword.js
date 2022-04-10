const router= require('express').Router();
const ForgotPassword= require('../models/ForgotPassword');
const User2= require('../models/User');

router.post('/:id', async (req, res)=>{
    try{
        const user= await User2.findOne({email: req.body.email});
        if(user){
            const forgotPassword= new ForgotPassword({
                email: req.body.email,
                newPassword: req.body.newPassword,
                confirmPassword: req.body.confirmPassword
            });
            const forgotPassword1= await forgotPassword.save();
            res.status(200).json(forgotPassword1);
        }
        else{
            res.status(404).json("User not found");
        }

    }
    catch(err){
        res.status(500).json(err);
    }
    
});

module.exports= router;