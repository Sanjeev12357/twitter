const Tweet = require('../models/tweet');
const LikeRepository=require('../repository/like-repo');
const TweetRepository=require('../repository/tweet-repository');
class LikeService{
    constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        // /api/v1/liikes/toggle?id= modelId&type=Tweet
        console.log(modelId,"modelID",modelType,"modelType",userId,"userId");

       if(modelType === 'Tweet'){
        var likeable = await Tweet.findById(modelId).populate({path:'likes'});
        console.log(likeable);
       }else if(modelType === 'Comment'){
        // var likeable = await this.commentRepository.get(modelId)
       }else {
        throw new Error('Invalid model type')
       }

       const exists =await this.likeRepository.findByUserAndLikeable({
        user:userId,
        onModel:modelType,
        likeable:modelId});

        if(exists){
            await this.likeRepository.destroy(exists._id);
            likeable.likes.pull(exists._id);
            await likeable.save();
            var isRemoved =  true;
        }else{
            const like = await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(like._id);
            await likeable.save();

            var isRemoved = false;
        }

        return isRemoved;
        
    }
}
module.exports = LikeService;