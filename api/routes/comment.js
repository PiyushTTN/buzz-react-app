const router=require('express').Router();
const Comment=require('../models/Comment');

router.post('/:id', async (req, res)=>{
    try {
        const comment = new Comment({
            userId: req.body.userId,
            postId: req.body.postId,
            desc: req.body.desc,
        });
        const comment1 = await comment.save();
        res.status(200).json(comment1);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports=router;