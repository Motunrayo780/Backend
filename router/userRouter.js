import { Router } from 'express'
import {getUser, postUser,getSingleUser,deleteUser  } from '../controller/userController.js';



const router= Router()

router.get("/user", getUser )
router.post("/users", postUser)
router.get("/user/:id", getSingleUser )
router.delete("/user/:id", deleteUser )


export default router;

