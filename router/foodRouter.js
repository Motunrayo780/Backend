import {Router } from 'express';
import {postFood,getFood,getFoodById,deleteFood } from "../controller/foodContoller.js";




const router = Router()



router.post("/food" , postFood)
router.get("/foods", getFood)
router.get("/foods/:id",getFoodById)
router.delete("/foods/:id",deleteFood)

export default router;