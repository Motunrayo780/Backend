import express from "express"
import  dotenv  from "dotenv";
import mongoose  from "mongoose";
import userRouter from "./router/userRouter.js";
import vendorRouter from "./router/vendorRouter.js";
import foodRouter from "./router/foodRouter.js";



const app = express();

dotenv.config();
app.use(express.json());
app.use(userRouter)
app.use(vendorRouter)
app.use(foodRouter)


const port = process.env.PORT

mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("database connected successfully");
    app.listen(port, ()=>{
        console.log(`server is listen on port ${port}`)
    })
})

.catch((error)=>{
    console.log(` connection to database fail  ${error.message}` )
})
