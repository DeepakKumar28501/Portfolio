import express from "express";
import mongoDB from "./config/dbConfig.js"
import connectDB from "./config/dbConfig.js";
const app=express();
const PORT=process.env.PORT||5000;

connectDB();
app.listen(PORT,()=>{
    console.log("Server is running in port",PORT)
})