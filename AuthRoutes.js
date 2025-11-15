const express=require("express");
const {signupValidation,loginValidation}=require("../middleware/AuthValidation");
const { signup, login,logout, profile } = require("../controller/AuthController");
const Authenticate=require("../middleware/auth");


const router=express.Router();

router.post("/signup",signupValidation,signup);

router.post("/login",loginValidation,login);

router.post("/logout",logout);

router.get("/user",Authenticate,profile);



module.exports=router;