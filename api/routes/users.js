const router= require('express').Router();
const bcrypt= require('bcrypt');
const User = require('../models/User');


//Update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  });


//Delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(405).json(err);
      }
    } else {
      return res.status(400).json("You can delete only your account!");
    }
  });



//Get user
router.get('/:id', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        // const {password, ...otherInfo}= user._doc;
        // res.status(200).json(otherInfo);
        res.status(200).json(user);

    }
    catch(err){
        return res.status(405).json(err);
    }
})




module.exports = router;