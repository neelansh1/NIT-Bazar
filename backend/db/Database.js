const mongoose=require("mongoose");

const connectDatabase=()=>{
    mongoose.connect("mongodb+srv://kesar1:abcd@cluster0.eelaygi.mongodb.net/").then(()=>{
        console.log("connection to MongoDB Atlas successful");
    }).catch((e)=>{
        console.log("no connection", e)
    })
}


module.exports=connectDatabase