import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';
import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
})
// console.log("dbname",DB_NAME)
// console.log("url",process.env.MONGODB_URL)

const connectDB=async()=>{
    try{
console.log("url",process.env.MONGODB_URL)

        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB Succcessfully connected... MongoDB HOST: ${connectionInstance.connection.host}`)// to explore
    }catch(error){
        // console.log(`${process.env.DB_NAME}/youtub`)
        console.log("MONGODB connection Failed in db/index",error);
        process.exit(1);// its a mode process failure
    }   
    // coe.log("successfully");
}

// mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
// const connection=mongoose.connection;
// connection.on('error',()=>{
//     console.log("Error connecting to database")
// });
// connection.on('connected',()=>{
//     console.log("mongodb connection successfully")
// });

export default connectDB;