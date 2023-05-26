
const Blog = require("../models/blog"); 
exports.updateLike = async(req,res)=>{
    try{
        // here we have to perform the required operation 
        const {like} = req.body;
        const {id} = req.params ; 
        console.log("hitted")

        const blog = await Blog.findByIdAndUpdate(
            {_id:id}, 
            {like}
            )
        res.status(200).json({
            success : true, 
            data: blog, 
            message:" like status updated succesfully", 
        })
    }
    catch(err){
        //    console.log(" error occured in creation");
           console.log(err)
           res.status(500).json({
            success: false, 
            data: [], 
            message:"Cant update the like on the post"
           })
        }
}