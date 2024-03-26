const express= require('express');
const {createTweet}=require('../../controllers/tweet-controller');
const {toggleLike}=require('../../controllers/like-controller');
const router=express.Router();

router.post('/v1/tweet',createTweet);
router.post('/v1/likes/toggle',toggleLike)

module.exports=router

