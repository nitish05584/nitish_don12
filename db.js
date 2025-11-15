const mongoose=require("mongoose");


const connectDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`datdbase connected is server`.bgMagenta);

    }catch(error){
        console.log("error");

    }
}
module.exports=connectDB