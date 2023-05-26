const mongoose = require("mongoose"); 

require("dotenv").config(); 
const dbConnect =()=> {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
    })
    .then(()=>{
        console.log("connection sucessfull");
    })
    .catch((err)=>{
        console.log("error occured") ; 
        process.exit(1);
    })
}
module.exports= dbConnect;