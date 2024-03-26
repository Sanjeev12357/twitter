const TweetService = require('../services/tweet-service');
const tweetService= new TweetService();
exports.createTweet=async(req,res)=>{

    try {
        const response=await tweetService.create(req.body);
        //console.log(response)

        return res.status(200).json({
            success:true,
            message:"Tweet created successfully",
            data:response,
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Tweet creation failed",
            data:{},
            err:error   
        })
    }
}