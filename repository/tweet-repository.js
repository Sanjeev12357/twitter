const Tweet=require("../models/tweet");
const CrudRepository=require("./crud-repository");

class TweetRepository extends CrudRepository{
    constructor(){
        super();
        this.model=Tweet;
    }
    async create(data){
        try {
            const tweet =await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
    async get(id){
        try{
            const result = await this.model.findById(id);
            return result;
        }catch(error){
            console.log(error)  
    }
}
    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate('comments').lean();    
            return tweet; 
        }catch(error){
            console.log(error)
        }   
    }
    async getAll(){
        try {
            return await Tweet.find({});
        } catch (error) {
            console.log(error)
        }   
    }
}
module.exports=TweetRepository;