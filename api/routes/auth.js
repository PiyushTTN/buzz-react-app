const router= require('express').Router();
const User= require('../models/User');
const bcrypt= require('bcrypt');


//Register
// router.get('/register', async(req,res)=>{
//     const user= await new User({
//         username:'Pooja',
//         email:'poojaphogat75@gmail.com',
//         password:'12345678'

//     })
//     await user.save();
//     res.send("ok")

// })

//Register

router.post('/register', async (req,res)=>{
    try{
        //Generate new Password
        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(req.body.password, salt);

        //Create new User
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        })
        
        //Save User and send respond
        const user= await newUser.save();
        res.status(200).json(user);
    }
    
    catch(err){
        res.status(403).json(err);
        // console.log(err);

    }
});


//Login

router.post('/login', async (req,res) => {
    try{ 
        //To Check Username
        const user = await User.findOne({email: req.body.email});
        // !user && res.status(400).json('User not found');
        if (!user) {
              return res.status(400).json('Credientials are wrong');
            //   console.log(user);

        }
    
        
        //To Check Password
        const vaildPassword= await bcrypt.compare(req.body.password, user.password);
        // !vaildPassword && res.status(402).json('Invalid Password');
        if(!vaildPassword ){
            return  res.status(402).json('Credientials are wrong');
        }
        
        
        res.status(200).json(user);

    }
    catch(err){
        res.status(403).json(err);
        // console.log(err);
    }
    
    
});

module.exports = router;