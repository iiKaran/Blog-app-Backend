
const Blog = require("../models/blog"); 


exports.createPost = async(req,res)=>{
    try{
        // here we have to perform the required operation 
        const {title, content , like, comments} = req.body;
        const response = await Blog.create({title , content, like , comments});
        console.log("tried");
        res.status(200).json({
            success : true, 
            data: response, 
            message:"created succesfully", 
        })
    }
    catch(err){
           console.log(" error occured in creation");
           console.log(err)
           res.status(500).json({
            success: false, 
            data: [], 
            message:"Cant create the blog post"
           })
        }
}