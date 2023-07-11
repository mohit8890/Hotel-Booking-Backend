import { updateUser,deleteUser,getUser,getUsers } from "../controllers/user.js";
import express from "express";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

 const router=express.Router();

 /*router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user ,You are logged in..")
 })

 router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
   res.send("hello user ,You are logged in and you can delete your account..")
})
 

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
   res.send("hello admin ,You are logged in and you can delete all accounts..")
})*/
 
 //update
 router.put("/update/:id",verifyUser,updateUser);

 //delete
 router.delete("/:id",verifyUser,deleteUser);

 //get
 router.get("/:id",verifyUser,getUser);

 //get all
 router.get("/",verifyAdmin,getUsers);


 

 export default router