import {Router } from 'express'
import {createVendor, getVendor, getVendorById  ,deleteVendor } from "../controller/vendorController.js"




const router = Router()



router.post("/vendor",createVendor)
router.get("/vendors",getVendor)
router.get("/vendors/:id",getVendorById)
router.delete("/vendors/:id",deleteVendor)

export default router;