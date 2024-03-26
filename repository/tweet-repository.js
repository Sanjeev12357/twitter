const Tweet=require("../models/tweet");


class TweetRepository{
    async create(data){
        try {
            const tweet =await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=TweetRepository;