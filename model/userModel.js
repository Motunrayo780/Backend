import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"] 
    },

    email: {
        type: String,  
        required: [true, "Email is required"],
        unique: true // Fixing `unique` syntax
    },

    password: { 
        type: String,
        required: true,
        minlength: 8
    },

    phone: {
        type: Number,
        required: true
    },

    company: { 
         type: String,
          required: true ,
    },

    vendor: [{ 
        type: mongoose.Schema.Types.ObjectId, // Fixed ObjectId syntax
        ref: "vendor"
    }]

}, { timestamps: true });

const user = mongoose.model("User", userSchema); // Capitalized model name is recommended

export default user; // Fixed export
