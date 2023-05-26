 const express = require("express"); 
 const app = express(); 
 app.use(express.json()); 


 require("dotenv").config(); 
 const PORT = process.env.PORT || 8000 ; 

 const BlogRoutes = require("./routes/BlogApp"); 
 
 app.use('/api/vi/',BlogRoutes); 

 app.listen(PORT,()=>{
    console.log(`server started a  at ${PORT}`);
})
 const dbConnect = require("./config/database"); 
 dbConnect();
 app.get("/",(req,res)=>{
    res.send("Hello blog page here");
 })
