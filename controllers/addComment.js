
const Blog = require("../models/blog"); 
exports.addComment = async(req,res)=>{
    try{
        const {comment} = req.body;
        const {id} = req.params ; 
        console.log("hitted")
        const blog = await Blog.findByIdAndUpdate(
            {_id:id}, 
            { $push: {comments:comment} },
            )
        res.status(200).json({
            success : true, 
            data: blog, 
            message:" comment added succesfully", 
        })
    }
    catch(err){
        //    console.log(" error occured in creation");
           console.log(err)
           res.status(500).json({
            success: false, 
            data: [], 
            message:"Cant add the comment on the post"
           })
        }
}