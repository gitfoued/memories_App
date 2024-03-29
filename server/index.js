import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import { Console } from "console";
import postRoutes from "./routes/posts.js";
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes)
const CONNECTION_URL='mongodb+srv://memories:mohamed27562068@cluster0.dbipnqh.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5000
mongoose.connect(CONNECTION_URL).then(()=>{
    app.listen(PORT,()=> console.log(`server run on port : ${PORT}`))
}).catch((error)=>Console.log(error.message))
