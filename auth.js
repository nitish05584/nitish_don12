const User=require("../models/User");

const jwt=require("jsonwebtoken");


const Authenticate=async(req,res,next)=>{
    const token=req.header("Authorization");
    try{
        if(!token){
            return res.status(303).json({message:"login first"})
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decode)
        const id=decode.userid;
        const user=await User.findById(id);

        if(!user){
            return res.status(104).json({message:"user not exist"});
        }
      req.user=user

       next();

    }catch(error){
        return res.status(104).json({message:"error"});
    }
}
module.exports=Authenticate;