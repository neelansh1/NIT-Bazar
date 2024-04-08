const express=require("express");
const path=require("path");
const router=express.Router();
const User=require("../model/user");
const {upload}=require("../multer");
const ErrorHandler=require("../utils/ErrorHandler");
const jwt=require("jsonwebtoken")
const sendMail = require("../utils/SendMail");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    
      const { Name, email, password } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }
    try{
      const user = {
        name: Name,
        email: email,
        password: password,
        
      };
  
      console.log(user);
      const activationToken = createActivationToken(user);
  
      const activationUrl = `http://localhost:3000/activation/${activationToken}`;
      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `please check your email:- ${user.email} to activate your account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
    catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
    
  });

  const createActivationToken = (user) => {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
      expiresIn: "5m",
    });
  };
  

    module.exports=router;