import express from "express";
// import mongoDB from "./config/dbConfig.js"
import connectDB from "./config/dbConfig.js";
const app=express();

import router  from "./routes/portfolioRoutes.js"

connectDB();
app.use(express.json());

app.use('/api/portfolio',router);
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log("Server is running in port",PORT)
})