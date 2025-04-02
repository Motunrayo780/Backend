import vendorModel from "../model/vendorModel.js";






// POST OPERATORS
export const createVendor = async (req, res) => {
    try {
     const {body} =req
     const vendor = new vendorModel(body)
     await vendor.save()
        return res.status(201).json({ message: "vendor created successfully", vendor:vendor });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Read All Vendors
export const getVendor = async (req, res) => {
  try{  
    const vendors = await vendorModel.find(); 

    if(vendors.length === 0){
      return res.status(404).json({ message: "No vendors found" });
    }
    return res.status(201).json({ message: "User created successfully", vendors});
} catch (error) {
    return res.status(500).json({ error: error.message });
}
  };
  
  // Read Vendor by ID
  export const getVendorById = async (req, res) => {
   try{
     const vendor = await vendorModel.findById(req.params.id)
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.json(vendor);
    return res.status(201).json({ message: "User created successfully", vendor:vendor });
} catch (error) {
    return res.status(500).json({ error: error.message });
}
  };
  

  
  // Delete Vendor
  export const deleteVendor = async (req, res) => {
    const vendor = await vendorModel.findByIdAndDelete(req.params.id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.json({ message: "Vendor deleted successfully" });
  };