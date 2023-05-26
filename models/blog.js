
const mongoose = require("mongoose"); 

const BlogSchema = new mongoose.Schema({
   
    title:{
        type: String, 
        required: true, 
    },
    content:{
        type:String, 
        required:true,
    }, 
    like:{
        type:Boolean, 
        required: true,
        default:false 
    }, 
    comments:{
        type:Object, 
        required: true,
        default:[] 
    }
}); 
module.exports = mongoose.model("Blog",BlogSchema);