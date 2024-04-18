import express,{Request,Response}  from "express"; 
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
mongoose.connect (process.env.MONGODB_URI as string).then(()=>{
    console.log("Database connected !");

}).catch((error)=>{
    console.log(`Database Connection Error`)
})
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors()); 
app.use(express.json()); // middleware :- convert body of any request we make to our API server into JSON format
app.get ("/test", async (req,res)=>{
    res.json({message:"Hello"})
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
export default app;