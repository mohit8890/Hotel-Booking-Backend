import express, { application } from "express";
import { createcontact, getcontact } from "../controllers/contact.js";


const router=express.Router();

router.put("/create",createcontact)


router.get("/",getcontact);

export default router