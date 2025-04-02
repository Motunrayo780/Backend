import mongoose from "mongoose";
import User from "./userModel.js"; 

const vendorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Name is required"]  
    },

    phone: { 
        type: Number
    },

    email: {
        type: String,
        required:[true, "Email is required"], 
        unique: true
    },

    company: {
        type: String, 
        required:[true, "Company is required"] 
    },

    // food: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Food"
    // }],

    user:{
        type: mongoose.Schema.Types.ObjectId, // Fixed ObjectId syntax
        ref: "User" // Should match the model name of `User`
    }

}, { timestamps: true });

const Vendor = mongoose.model("Vendor",vendorSchema); // Fixed model name

export default Vendor;
