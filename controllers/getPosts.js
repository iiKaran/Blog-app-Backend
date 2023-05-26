
const Blog = require("../models/blog"); 


exports.getPosts = async(req,res)=>{
    try{
        const response= await Blog.find({}); 
        res.status(200).json({
            success : true, 
            data: response, 
            message:"retrieved succesfully", 
        })
    }
    catch(err){
           console.log(" error occured in retriving");
           console.log(err)
           res.status(500).json({
            success: false, 
            data: [], 
            message:"Cant retrieve the blog posts"
           })
        }
}