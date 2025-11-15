const express=require("express");

const colors=require("colors");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const connectDB=require("./models/db");
const AuthRoutes=require("./routes/AuthRoutes");
const recipeRouter=require("./routes/recipe");



const app=express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true

}));



app.use("/auth",AuthRoutes)
app.use("/auth",recipeRouter)


const port=process.env.port||3000


app.listen(port,()=>{
    console.log(`server is running on ${port}`.bgCyan);
})