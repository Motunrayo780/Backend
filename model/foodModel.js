import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Food name is required"],
        trim: true
    },
   
    price:{
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be a positive number"]
    },
    category:{
        type: String,
        required: [true, "Category is required"]
    },

    
   
}, { timestamps: true });

const foodModel = mongoose.model("FoodModel",foodSchema);

export default foodModel;
