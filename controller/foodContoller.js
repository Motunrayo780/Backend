import foodModel from "../model/foodModel.js";


// POST OPERATORS
export const postFood = async (req, res) => {
    try {
     const {body} =req
     const food = new foodModel(body)
     await food.save()
        return res.status(201).json({ message: "vendor created successfully", food:food});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Read All Vendors
export const getFood = async (req, res) => {
  try{  
    const food = await foodModel.find(); 

    if(food.length === 0){
      return res.status(404).json({ message: "No vendors found" });
    }
    return res.status(201).json({ message: "User created successfully", food});
} catch (error) {
    return res.status(500).json({ error: error.message });
}
  };
  
  // Read Vendor by ID
  export const getFoodById = async (req, res) => {
   try{
     const food = await foodModel.findById(req.params.id)
    if (!food) return res.status(404).json({ message: "Vendor not found" });
    res.json(food);
    return res.status(201).json({ message: "User created successfully", food:food});
} catch (error) {
    return res.status(500).json({ error: error.message });
}
  };
  

  
  // Delete Vendor
  export const deleteFood = async (req, res) => {
    const food = await foodModel.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ message: "Vendor not found" });
    res.json({ message: "Vendor deleted successfully" });
  };