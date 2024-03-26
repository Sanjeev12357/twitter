const LikeService = require('../services/like-service');



const likeService= new LikeService();
exports.toggleLike=async(req,res)=>{
    try {
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);

        return res.status(200).json({
            success:true,
            data:response,
            message:"like toggled successfully",
            err:{}
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success:false,
            data:{},
            message:"something went wrong",
            err:error
        })
    }
}

