
import userModel  from "../model/userModel.js";
import bcrypt from "bcrypt"




// Get operator
export const getUser = async (req, res)=>{
try{
const User = await userModel.find()
if (User.length === 0){
    return res.status(404).json({message: "No users found"})
}
return res.status (200).json ({message: "users successfully",  user:User})
} 
catch(error){
return res.status(500).json ({error: error.message})
}

}

// POST OPERATORS
export const postUser = async (req, res) => {
    try {
        const { name, email,password,phone, company } = req.body;

        if (!name || !email  || !password|| !phone || !company ) {
            return res.status(400).json({ message: "Name and email and company details are required" });
        }

        const user = new userModel({ name, email, password, phone, company }); 
        await user.save();

        return res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};




// Get single operator

export const getSingleUser = async (req, res) =>{
try{

const id = req.params.id

const user = await userModel.findById().populate("name,phone,email,company")


if(!user){
    return res.status(404).json({message: "user not found " })
}
return res.status(200).json ({message: "User retrieved successfully " , users:user})

}catch(error){
return res.status(500).json({error: error.message})
}
}


  
  // Delete Vendor
  export const deleteUser = async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "user not found" });
    res.json({ message: "user deleted successfully" });
  };


export const registerUser = async(req, res)=>{
    try {
        const {body} = req
        const { name, email,password,phone, company,vedour } = body

        const salt =await bcrypt.gensalt(8)
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userModel({
            password: hashedPassword,
            ...body
        })

        await user.save()
        return res.status(201).json({message: "User created successfully"})

    }catch(error){
            return res.status(500).json({error: error.message})
}
 }
                    