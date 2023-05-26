const express = require("express"); 
const router = express.Router(); 
require("dotenv").config(); 
const PORT = process.env.PORT || 8000 ; 
const {getPosts}= require("../controllers/getPosts")
const {createPost} = require("../controllers/createPost"); 
const {addComment} = require("../controllers/addComment");
const {updateLike} = require("../controllers/updateLike");
router.post("/createPost", createPost);
router.get("/getPosts",getPosts);
router.put("/updateLike/:id",updateLike);
router.put("/addcomment/:id",addComment);
module.exports= router ;
