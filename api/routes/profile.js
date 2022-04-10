const router= require('express').Router();
const Profile = require('../models/profile');
const User1 = require('../models/User');


router.post('/:id',async (req,res)=>{
    try {
        const user = await User1.findOne({ email: req.body.email });
        
        if(!user) { 
          return res.status(404).json("user not found");
        }
        else{
            const profile = new Profile({
                userName: req.body.userName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                designation: req.body.designation,
                country:req.body.country,
                state: req.body.state,
                city: req.body.city,
              });
            const profile1 = await profile.save();
            res.status(200).json(profile1);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports= router;
