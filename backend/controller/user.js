const express=require("express");
const path=require("path");
const router=express.Router();
const User=require("../model/user");
const {upload}=require("../multer");
const ErrorHandler=require("../utils/ErrorHandler");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    
      const { Name, email, password } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }

    const user = {
      name: Name,
      email: email,
      password: password,
      
    };

    console.log(user);

    const newUser=await User.create(user);
    res.status(201).json({
        success:true,
        newUser,
    })
  });

    module.exports=router;