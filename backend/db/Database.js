const mongoose=require("mongoose");

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("connection to MongoDB Atlas successful");
    }).catch((e)=>{
        console.log("no connection", e)
    })
}


module.exports=connectDatabase