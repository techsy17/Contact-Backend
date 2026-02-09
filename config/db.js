import mongoose from "mongoose";

let isConnected = false;
const connectDB = async()=>{

    if(isConnected) return;
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export default connectDB;
