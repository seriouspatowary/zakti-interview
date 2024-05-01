import dotenv from 'dotenv';
import mongoose from "mongoose";


dotenv.config();

export const Connection = async()=>{
 
  
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to MongoDB");

        const fetch_data = mongoose.connection.db.collection("zakti");
        const data = await fetch_data.find({}).toArray();

        global.products = data;

    } catch (error) {
        console.log('Error while connecting with the database',error.message)
    }

}


export default Connection;