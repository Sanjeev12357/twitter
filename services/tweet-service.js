const HashtagRepository = require("../repository/hashtag-repository");
const {TweetRepository}=require("../repository/index")
class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); // Regex for extracting hashtags
        if (tags) {
            tags = tags.map(tag => tag.substring(1).toLowerCase());
            console.log(tags);
            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags =await  this.hashtagRepository.findByName(tags);
            let titleOfPresentTags=alreadyPresentTags.map(tag=>tag.title)
           // console.log(alreadyPresentTags)
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
          //  console.log("filtertags",newTags);
            newTags = newTags.map(tag => {
                return { title: tag, tweets: [tweet.id] }
            });
            //console.log("new Tgs",newTags);
    
            const response = await this.hashtagRepository.bulkCreate(newTags);
           // console.log(response);

            alreadyPresentTags.forEach((tag)=>{
                tag.tweets.push(tweet.id);
                tag.save();
            })
    
            // Todo: create hashtags and add here
            return tweet;
        } else {
            // If there are no hashtags in the content
            return await this.tweetRepository.create(data);
        }
    }
    
}

module.exports=TweetService;